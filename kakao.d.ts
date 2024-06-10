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

interface Window {
  Kakao: KakaoNamespace
}

interface KakaoNamespace {
  cleanup: () => void
  init: (appKey: string) => void
  isInitialized: () => boolean
  Share: {
    sendDefault: (params: KakaoShareParams) => void
  }
}
interface KakaoShareParams {
  objectType: string
  address: string
  addressTitle: string
  content: {
    title: string
    description: string
    imageUrl: string
    link: {
      mobileWebUrl: string
      webUrl: string
    }
  }
  social: {
    commentCount: number
  }
  buttons: Array<{
    title: string
    link: {
      mobileWebUrl: string
      webUrl: string
    }
  }>
}
