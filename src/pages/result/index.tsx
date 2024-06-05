import Footer from './components/footer'

const Result = () => {
  return (
    <div>
      'result page'
      {/* 이후 api에서 받아오는 데이터에 따라 isBookmarked에 넣어주세요 */}
      <Footer
        isBookmarked={true}
        isReservationProduct={true}
        discount={20}
        price={20000}
      />
    </div>
  )
}

export default Result
