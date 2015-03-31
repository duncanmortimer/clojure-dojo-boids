(ns ^:figwheel-always flocking.core
  (:require [reagent.core :as rc]))

(enable-console-print!)

(defonce boids (rc/atom nil))

(defn boid [x y vx vy]
  {:x x :y y :vx vx :vy vy})

(defn init-boids [boid-atom]
  (reset! boid-atom [(boid 1 1 2 3)
                     (boid 4 8 7 3)
                     (boid 1 7 7 3)
                     (boid 8 3 7 3)
                     (boid 1 3 7 3)
                     (boid 2 3 7 3)
                     (boid 1 7 7 3)
                     (boid 8 3 7 3)
                     (boid 7 3 7 3)]))

(defn render-boid [{:keys [x y vx vy] :as boid}]
  (let [coords []])
  [:polyline {:points points :stroke "red" :fill "none"}]
  )


(defn flock-debug []
  [:ul
   (map (fn [b] [:li (str b)]) @boids)])

(defn mount-debug []
  (rc/render-component [flock-debug]
                       (.-body js/document)))

(def cm-coeff 100.0)
(def avoid-coeff -50.0)

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
        newx (+ (:x boid) (/ dx cm-coeff))
        newy (+ (:y boid) (/ dy cm-coeff))]
    (assoc boid :x newx :y newy)))

(defn avoid-a-random
  [boids boid]
  (let [other-boid (rand-nth boids)
        dx (- (:x boid) (:x other-boid))
        dy (- (:y boid) (:y other-boid))
        newx (+ (:x boid) (/ dx avoid-coeff))
        newy (+ (:y boid) (/ dy avoid-coeff))
        ]
    (assoc boid :x newx :y newy)))

(defn update-boids
  [boids]
  (let [cm (centre-of-mass boids)
        cm-boids (mapv (partial boid-to-cm cm) boids)
        avoid-boids (mapv (partial avoid-a-random cm-boids) cm-boids)
    ]
    avoid-boids))

(defn run []
  (js/setInterval #(swap! boids update-boids) 1000))




