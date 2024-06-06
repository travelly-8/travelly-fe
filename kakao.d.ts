declare namespace kakao.maps {
  class LatLng {
    constructor(lat: number, lng: number)
  }

  class Map {
    constructor(container: HTMLElement, options: MapOptions)
    setCenter(latlng: LatLng): void
  }

  interface MapOptions {
    center: LatLng
    level: number
  }

  namespace services {
    class Geocoder {
      addressSearch(
        address: string,
        callback: (result: KakaoAddressResult[], status: Status) => void,
      ): void
    }

    enum Status {
      OK = 'OK',
    }
  }

  class Marker {
    constructor(options: MarkerOptions)
  }

  interface MarkerOptions {
    map: Map
    position: LatLng
  }
}

interface KakaoAddressResult {
  y: string
  x: string
}
