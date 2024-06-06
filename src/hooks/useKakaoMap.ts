import { useEffect, useRef } from 'react'

interface IUseKakaoMapProps {
  address: string
  detailAddress: string
}

const useKakaoMap = ({ address, detailAddress }: IUseKakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapAddress = `${address} ${detailAddress}`

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=7eef68f1d41b5edb4c45df3e21baaf0a&autoload=false&libraries=services'
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 4,
          }
          const map = new window.kakao.maps.Map(mapRef.current, options)

          const geocoder = new window.kakao.maps.services.Geocoder()

          geocoder.addressSearch(mapAddress, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              if (result.length > 0) {
                const coords = new window.kakao.maps.LatLng(
                  parseFloat(result[0].y),
                  parseFloat(result[0].x),
                )

                const imageSrc = '/src/assets/products-detail/marker.svg'
                const imageSize = new window.kakao.maps.Size(25, 32)
                const imageOption = {
                  offset: new window.kakao.maps.Point(12.5, 16),
                }

                const markerImage = new window.kakao.maps.MarkerImage(
                  imageSrc,
                  imageSize,
                  imageOption,
                )
                const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                  image: markerImage,
                })

                map.setCenter(coords)
              }
            }
          })
        }
      })
    }
    return () => {
      script.remove()
    }
  }, [address, detailAddress])

  return mapRef
}

export default useKakaoMap
