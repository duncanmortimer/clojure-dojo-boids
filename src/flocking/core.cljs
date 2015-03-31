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

(defn render-flock [boids]
  [:svg {:height 480 :width 640}
   [:polyline {:points }]])
