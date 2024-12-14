/**
 * @author Tan Dat
 */
import Policies from './Policies'

import Moto2 from './Moto_chinhSachNV'
import Banner from './Banner'
import FAQ from './FAQ'

//pic for policy
import policy_pic1 from '../../assets/test_about.jpg'
import policy_pic2 from '../../assets/test_about.jpg'
import policy_pic3 from '../../assets/test_about.jpg'
import policy_pic4 from '../../assets/test_about.jpg'
import policy_pic5 from '../../assets/test_about.jpg'
import policy_pic6 from '../../assets/test_about.jpg'


const About = () => {
  const policyData = [
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Lương & Phúc lợi',
      content: 'Để tạo điều kiện kiện làm việc tốt nhất cho nhân viên, chúng tôi có nhiều chính sách đến lương thưởng, phụ cấp chi phí đi lại, ăn uống cùng bảo hiểm cho toàn bộ nhân viên',
      logo: policy_pic2
    },
    {
      title: 'Làm việc linh hoạt',
      content: 'Cho phép làm việc từ xa, lựa chọn giờ làm việc linh hoạt với bản thân, có chính sách nghỉ không lương tạo điều kiện giải quyết chuyện cá nhân',
      logo: policy_pic3
    },
    {
      title: 'Khen thưởng & công nhận',
      content: 'Vinh danh các cá nhân có thành tích nổi bật, tăng lương thưởng và quà tặng vào các dịp lễ, Tết',
      logo: policy_pic4
    },
    {
      title: 'Sức khỏe & đời sống',
      content: 'Hỗ trợ khám sức khỏe định kỳ, tổ chức các buổi tư vấn tâm lí và nhiều hoạt động team building',
      logo: policy_pic5
    },
    {
      title: 'Minh bạch & công bằng',
      content: 'Lắng nghe ý kiến nhân viên, đánh giá các cá nhân một cách công bằng, không phân biệt giới tính, màu da hay dân tộc nào',
      logo: policy_pic6
    },
  ]

  const faqData = [
    {
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục đích của trang web là cung cấp dịch vụ đặt vé máy bay nhanh chóng, an toàn, bảo mật thông tin và hỗ trợ khách hàng hiệu quả, đặc 
      biệt giúp những người mới tiếp cận dễ dàng và tránh rủi ro lừa đảo. Hãy đặt vé ngay bạn nhé! `
    },
    {
      question: 'Chính sách hỗ trợ hoàn trả vé và dời lịch bay ?',
      answer: `Chúng tôi hỗ trợ hoàn trả vé và dời lịch bay theo chính sách của từng hãng hàng không. Quý khách vui lòng cung cấp mã đặt chỗ và thông tin cá nhân để được hỗ trợ.
        - Hoàn vé: Áp dụng theo điều kiện vé đã mua, các loại vé giá rẻ hoặc khuyến mãi có thể không được hoàn. Nếu hoàn vé, phí hoàn sẽ do hãng hàng không quy định.
        - Dời lịch bay: Được hỗ trợ tùy thuộc vào tình trạng chỗ trống của chuyến bay mới và chính sách vé. Có thể phát sinh phí thay đổi hoặc chênh lệch giá vé.
        Quý khách có thể liên hệ đội ngũ chăm sóc khách hàng của chúng tôi để được tư vấn và hỗ trợ nhanh nhất.`
    },
    {
      question: 'Có ứng dụng dùng cho di động không ?',
      answer: `Không`
    },
    {
      question: 'Thông tin cá nhân của tôi có an toàn trên trang web này không ?',
      answer: `Tất nhiên. Chính sách của chúng tôi là bảo vệ quyền riêng tư của người dùng bằng mọi cách.`
    },
    {
      question: 'Phương thức thanh toán nào được chấp nhận cho tài khoản nâng cấp GET PRO ?',
      answer: `Chúng tôi chấp nhận thanh toán qua ZaloPay (ứng dụng ZaloPay, thẻ nội địa và quốc tế, ...)`
    },
  ]

  return (
    <>
      <Banner />

      <Moto2 />

      <Policies policyData={policyData} />

      <FAQ faqData={faqData} />
    </>
  )
}

export default About;
