import { useEffect, useRef } from 'react'

interface IUseKakaoMapProps {
  address: string
  detailAddress: string
}

interface ExtendedMarkerOptions extends kakao.maps.MarkerOptions {
  image?: kakao.maps.MarkerImage
}

const useKakaoMap = ({ address, detailAddress }: IUseKakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapAddress = `${address} ${detailAddress}`
  const kakao = window.kakao

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=7eef68f1d41b5edb4c45df3e21baaf0a&autoload=false&libraries=services'
    document.head.appendChild(script)

    script.onload = () => {
      if (kakao && kakao.maps) {
        kakao.maps.load(() => {
          if (mapRef.current) {
            const options = {
              center: new kakao.maps.LatLng(33.450701, 126.570667),
              level: 4,
            }
            const map = new kakao.maps.Map(mapRef.current, options)

            const geocoder = new kakao.maps.services.Geocoder()

            geocoder.addressSearch(mapAddress, function (result, status) {
              if (status === kakao.maps.services.Status.OK) {
                if (result.length > 0) {
                  const coords = new kakao.maps.LatLng(
                    parseFloat(result[0].y),
                    parseFloat(result[0].x),
                  )

                  const imageSrc = '/src/assets/products-detail/marker.svg'
                  const imageSize = new kakao.maps.Size(25, 32)
                  const imageOption = {
                    offset: new kakao.maps.Point(12.5, 16),
                  }

                  const markerImage = new kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption,
                  )
                  const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image: markerImage,
                  } as ExtendedMarkerOptions)

                  map.setCenter(coords)
                }
              }
            })
          }
        })
      }
    }
    return () => {
      script.remove()
    }
  }, [address, detailAddress])

  return mapRef
}

export default useKakaoMap
