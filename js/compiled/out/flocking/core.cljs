(ns ^:figwheel-always flocking.core
  (:require [reagent.core :as rc]
            [flocking.kdtree :as kdtree]))

(enable-console-print!)

;; Initialise

(def ranges {:x 640 :y 480 :vx [-5 5] :vy [-5 5]})

(defn rand-int-between [[l h]]
  (+ (rand-int (- h l)) l))

(defn boid [x y vx vy]
  {:x x :y y :vx vx :vy vy})

(defn random-boid []
  (let [x (rand-int (:x ranges))
        y (rand-int (:y ranges))
        vx (rand-int-between (:vx ranges))
        vy (rand-int-between (:vy ranges))]
    (boid x y vx vy)))

(defn init-boids [n boid-atom]
  (reset! boid-atom (doall (take n (repeatedly random-boid)))))

;; some debugging stuff
(defn flock-debug [boids-atom]
  [:ul
   (map (fn [b] [:li (str b)]) @boids-atom)])

(defn mount-debug [boids-atom]
  (rc/render-component [flock-debug boids-atom]
                       (.-body js/document)))

;; simulation
(def cohesion-coeff -0.9)
(def separation-coeff 0.03)
(def separation-neighbourhood 4)
(def alignment-coeff 0.15)
(def alignment-neighbourhood 4)

(defn centre-of-mass
  [boids]
  (let [n (count boids)
        sx (reduce + (mapv :x boids))
        sy (reduce + (mapv :y boids))]
    {:x (/ sx n) :y (/ sy n)}))

(defn cohesion-force
  [cm boid]
  (let [dx (- (:x boid) (:x cm))
        dy (- (:y boid) (:y cm))
        s (Math/sqrt (+ (* dx dx) (* dy dy)))
        ux (/ dx s)
        uy (/ dy s)
        fx (* ux cohesion-coeff)
        fy (* uy cohesion-coeff)]
    {:fx fx :fy fy}))

(defn separation-force
  [tree boid]
  (let [neighbours (mapv :point (rest (kdtree/nearest-neighbor tree [(:x boid) (:y boid)] separation-neighbourhood)))
        xf (/ (reduce + (mapv first neighbours)) (- separation-neighbourhood 1))
        yf (/ (reduce + (mapv second neighbours)) (- separation-neighbourhood 1))
        dx (- (:x boid) xf)
        dy (- (:y boid) yf)
        fx (* dx separation-coeff)
        fy (* dy separation-coeff)]
    {:fx fx :fy fy}))

(defn alignment-force
  [tree boid]
  (let [neighbours (rest (kdtree/nearest-neighbor tree [(:x boid) (:y boid)] alignment-neighbourhood))
        vxf (/ (reduce + (mapv #(:vx (:boid (meta %))) neighbours)) (- alignment-neighbourhood 1))
        vyf (/ (reduce + (mapv #(:vx (:boid (meta %))) neighbours)) (- alignment-neighbourhood 1))
        fx (* (- vxf (:vx boid)) alignment-coeff)
        fy (* (- vyf (:vy boid)) alignment-coeff)]
    {:fx fx :fy fy}))

(defn total-force
  [cm tree boid]
  (let [forces ((juxt (partial cohesion-force cm)
                      (partial separation-force tree)
                      (partial alignment-force tree)
                      )
                 boid)
        fx (reduce + (mapv :fx forces))
        fy (reduce + (mapv :fy forces))]
    {:fx fx :fy fy}))

(defn calculate-forces
  [boids]
  (let [cm (centre-of-mass boids)
        tree (kdtree/build-tree (mapv (fn [b] (with-meta [(:x b) (:y b)] {:boid b})) boids))]
    (mapv (partial total-force cm tree) boids)))

(defn limit
  [v m]
  (cond
    (> v m) m
    (< v (* -1.0 m)) (* -1.0 m)
    true v))

(defn update-velocity [force boid]
  (let [{vx :vx vy :vy} boid
        {fx :fx fy :fy} force]
    (assoc boid
      :vx (limit (+ vx fx) 10.0)
      :vy (limit (+ vy fy) 10.0))))

(defn update-position [{:keys [x y vx vy] :as boid}]
  (assoc boid
    :x (mod (+ x vx) (:x ranges))
    :y (mod (+ y vy) (:y ranges))))

(defn update-boids
  [boids]
  (let [forces (calculate-forces boids)
        boids' (->> boids
                    (mapv update-velocity forces)
                    (mapv update-position))]
    boids'))

(defn run [boids-atom]
  (js/setInterval #(swap! boids-atom update-boids) 20))

;; rendering
(defn render-boid [coord-scale velocity-scale]
  (fn [{:keys [x y vx vy] :as boid}]
    (let [coords [[x y] [(+ x (* velocity-scale vx)) (+ y (* velocity-scale vy))]]
          points (->> coords
                      (map (partial map #(* coord-scale %)))
                      (map (partial interpose " "))
                      (map (partial apply str))
                      (interpose ", ")
                      (apply str))]
      [:polyline {:points points :stroke "red" :fill "none"}])))

(defn render-flock [boids-atom config-atom]
  (let [boids @boids-atom
        {ps :ps vs :vs} @config-atom]
    [:svg {:height 480 :width 640}
     (for [boid boids]
       ^{:key boid} [(render-boid ps vs) boid])]))

(defn mountit [boids-atom config-atom]
  (rc/render-component [render-flock boids-atom config-atom]
                       (.-body js/document)))

;; start everything up
(defonce config (rc/atom {:ps 1 :vs 2}))
(defonce boids (rc/atom nil))
(defonce simulation (rc/atom nil))

(defn start []
  (when-not @simulation
    (reset! simulation (run boids))))

(defn stop []
  (when @simulation
    (swap! simulation js/clearInterval)))

(defn begin
  ([] (begin 50))

  ([n]
   (when @simulation
     (stop))
   (init-boids n boids)
   (mountit boids config)
   (start)))

(begin)
