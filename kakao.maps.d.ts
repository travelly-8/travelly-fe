declare namespace kakao.maps {
  class LatLng {
    constructor(lat: number, lng: number)
  }

  class Map {
    constructor(container: HTMLElement, options: IMapOptions)
    setCenter(latlng: LatLng): void
  }

  interface IMapOptions {
    center: LatLng
    level: number
  }

  namespace services {
    class Geocoder {
      addressSearch(
        address: string,
        callback: (result: IKakaoAddressResult[], status: Status) => void,
      ): void
    }

    enum Status {
      OK = 'OK',
    }
  }

  class Marker {
    constructor(options: IMarkerOptions)
  }

  interface IMarkerOptions {
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

  function load(callback: () => void): void
}

interface IKakaoAddressResult {
  y: string
  x: string
}

interface Window {
  kakao: IKakaoNamespace
}

interface IKakaoNamespace {
  maps: typeof kakao.maps
}
