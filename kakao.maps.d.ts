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

  class MarkerImage {
    constructor(src: string, size: Size, options: { offset: Point })
  }

  class Size {
    constructor(width: number, height: number)
  }

  class Point {
    constructor(x: number, y: number)
  }
}

interface KakaoAddressResult {
  y: string
  x: string
}

interface Window {
  kakao: KakaoNamespace
}

interface KakaoNamespace {
  maps: typeof kakao.maps
}
