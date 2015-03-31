(ns ^:figwheel-always flocking.core
  (:require [reagent.core :as rc]))

(enable-console-print!)

(def ranges {:x 640 :y 480 :vx [-10 10] :vy [-10 10]})

(defonce boids (rc/atom nil))

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

(defn init-boids [boid-atom]
  (reset! boid-atom (doall (take 100 (repeatedly random-boid)))))
  
(defn flock-debug []
  [:ul
   (map (fn [b] [:li (str b)]) @boids)])

(defn mount-debug []
  (rc/render-component [flock-debug]
                       (.-body js/document)))

(def cm-coeff 0.001)
(def avoid-coeff -1.0)

(defn centre-of-mass
  [boids]
  (let [n (count boids)
        sx (reduce + (mapv :x boids))
        sy (reduce + (mapv :y boids))]
    {:x (/ sx n) :y (/ sy n)}))

(defn boid-to-cm
  [boid cm]
  (let [dx (- (:x boid) (:x cm))
        dy (- (:y boid) (:y cm))
        newx (+ (:x boid) (* dx cm-coeff))
        newy (+ (:y boid) (* dy cm-coeff))]
    (assoc boid :x newx :y newy)))

(defn avoid-a-random
  [boids boid]
  (let [other-boid (rand-nth boids)
        dx (- (:x boid) (:x other-boid))
        dy (- (:y boid) (:y other-boid))
        newx (+ (:x boid) (* dx avoid-coeff))
        newy (+ (:y boid) (* dy avoid-coeff))
        ]
    (assoc boid :x newx :y newy)))

(defn update-boids
  [boids]
  (let [cm (centre-of-mass boids)
        _ (println cm)
        cm-boids (mapv (partial boid-to-cm cm) boids)
        avoid-boids (mapv (partial avoid-a-random cm-boids) cm-boids)
    ]
    avoid-boids))

(defn run []
  (js/setInterval #(swap! boids update-boids) 1000))




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

(defn render-flock [boids-atom]
  (let [boids @boids-atom]
    [:svg {:height 480 :width 640}
     (map #(vector (render-boid 1 0.5) %) boids)]))

(defn list-render-flock [boids-atom]
  (let [boids @boids-atom]
    [:ul
     (map #(vector :li (str %)) boids)]))

(defn mountit []
  (rc/render-component [render-flock boids]
                       (.-body js/document)))

>>>>>>> 89d5e1bda43301e34802b08e8462d0e4fc1b99de
