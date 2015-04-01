(ns ^:figwheel-always flocking.core
  (:require [reagent.core :as rc]))

(enable-console-print!)

;; Initialise

(def ranges {:x 640 :y 480 :vx [-10 10] :vy [-10 10]})

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
(def cm-coeff -0.9)
(def avoid-coeff 0.5)
(def damping-coeff 0.1)
(def force-coupling 0.1)

(defn centre-of-mass
  [boids]
  (let [n (count boids)
        sx (reduce + (mapv :x boids))
        sy (reduce + (mapv :y boids))]
    {:x (/ sx n) :y (/ sy n)}))

(defn boid-to-cm
  [cm boid]
  (let [dx (- (:x boid) (:x cm))
        dy (- (:y boid) (:y cm))
        s (Math/sqrt (+ (* dx dx) (* dy dy)))
        ux (/ dx s)
        uy (/ dy s)
        fx (* ux cm-coeff)
        fy (* uy cm-coeff)]
    (assoc boid :fx fx :fy fy)))

(defn avoid-a-random
  [boids boid]
  (let [other-boid (rand-nth boids)]
    (if (and (= (:x boid) (:x other-boid))
             (= (:y boid) (:y other-boid)))
      boid
      (let [dx (- (:x boid) (:x other-boid))
            dy (- (:y boid) (:y other-boid))
            s (Math/sqrt (+ (* dx dx) (* dy dy)))
            ux (/ dx s)
            uy (/ dy s)
            fx (/ (* ux avoid-coeff) s)
            fy (/ (* uy avoid-coeff) s)]
        (-> boid
            (update-in [:fx] (partial + fx))
            (update-in [:fy] (partial + fy)))))))

(defn damping [{:keys [vx vy] :as boid}]
  (-> boid
      (update-in [:fx] (partial + (* damping-coeff (- 0 vx))))
      (update-in [:fy] (partial + (* damping-coeff (- 0 vy))))))

(defn update-velocity [{:keys [vx vy fx fy] :as boid}]
  (assoc boid
         :vx (+ vx (* force-coupling fx))
         :vy (+ vy (* force-coupling fy))))

(defn update-position [{:keys [x y vx vy] :as boid}]
  (assoc boid
         :x (+ x vx)
         :y (+ y vy)))

(defn update-boids
  [boids]
  (let [cm (centre-of-mass boids)
        boids' (->> boids
                    (mapv (partial boid-to-cm cm))
                    (mapv (partial avoid-a-random boids))
                    (mapv damping)
                    (mapv update-velocity)
                    (mapv update-position))]
    boids'))

(defn run [boids-atom]
  (js/setInterval #(swap! boids-atom update-boids) 100))

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
(defonce config (rc/atom {:ps 1 :vs 10}))
(defonce boids (rc/atom nil))
(defonce simulation (rc/atom nil))

(defn start []
  (when-not @simulation
    (reset! simulation (run boids))))

(defn stop []
  (when @simulation
    (swap! simulation js/clearInterval)))

(defn begin
  ([] (begin 100))

  ([n]
   (when @simulation
     (stop))
   (init-boids n boids)
   (mountit boids config)
   (start)))

