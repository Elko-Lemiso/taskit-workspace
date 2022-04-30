import { useEffect, useRef } from "react";

export function Map({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
      mapId: "d409499cfa36b2ca",
      disableDefaultUI: true,
    });
  });

  return <div ref={ref} style={{height:"100%", borderRadius: "10px"}} id="map" />;
}
