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

declare namespace kakao {
  function cleanup(): void
  function init(appKey: string): void
  function isInitialized(): boolean

  namespace Share {
    function sendDefault(options: ShareOptions): void

    interface ShareOptions {
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
  }
}

interface IKakaoAddressResult {
  y: string
  x: string
}

interface Window {
  kakao: typeof kakao & {
    cleanup: () => void
    init: (appKey: string) => void
    isInitialized: () => boolean
    Share: {
      sendDefault: (options: kakao.Share.ShareOptions) => void
    }
  }
  Kakao: {
    cleanup: () => void
    init: (appKey: string) => void
    isInitialized: () => boolean
    Share: {
      sendDefault: (options: {
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
        buttons?: Array<{
          title: string
          link: {
            mobileWebUrl: string
            webUrl: string
          }
        }>
      }) => void
    }
  }
}
