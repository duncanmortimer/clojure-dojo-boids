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

