function shareMessage(
  address: string,
  addressTitle: string,
  title: string,
  description: string,
  imageUrl: string,
  url: string,
  commentCount: number,
) {
  if (window.Kakao && window.Kakao.Share) {
    window.Kakao.Share.sendDefault({
      objectType: 'location',
      address: address,
      addressTitle: addressTitle,
      content: {
        title: title,
        description: description,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        commentCount: commentCount,
      },
      buttons: [
        {
          title: '상품 페이지',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    })
  } else {
    console.error('Kakao SDK is not initialized.')
  }
}

export default shareMessage
