import Card from "../../components/Card";
import { FcCalendar, FcViewDetails, FcLikePlaceholder, FcGallery, FcCloseUpMode, FcDocument } from "react-icons/fc";

function Features() {

    const feature1= {
        icon: <FcCalendar/>,
        title : 'Calendar Design',
        text : 'Strengthen your corporate identity with specially designed calendars.',
        buttonText: 'Create Order'
    }

    const feature2= {
        icon: <FcViewDetails/>,
        title : 'Business Card Design',
        text : 'Business card design is an important element that reflects the professional image of a person or business.',
        buttonText: 'Create Order'
    }
    const feature3= {
        icon: <FcLikePlaceholder/>,
        title : 'Logo Design',
        text : 'A good logo should reflect the values, purpose and character of the brand.',
        buttonText: 'Create Order'
    }
    const feature4= {
        icon: <FcGallery/>,
        title : 'Website Design',
        text : 'When the website design is good, the probability of retaining potential customers coming to your page increases and the rate of customers interacting with your page is higher.',
        buttonText: 'Create Order'
    }
    const feature5= {
        icon: <FcCloseUpMode/>,
        title : 'Mug Design',
        text : 'With personally designed glass mug models, people can easily use the glass mugs that suit their tastes anywhere.',
        buttonText: 'Create Order'
    }
    const feature6= {
        icon: <FcDocument/>,
        title : 'Brochure Design',
        text : 'Convey the details of your products or services to your customers quickly and clearly with folded brochures.',
        buttonText: 'Create Order'
    }



  return (
    <>
      <div className="container">
        <div className="row">
          <Card icon={feature1.icon} title={feature1.title} text={feature1.text} buttonText={feature1.buttonText}/>
          <Card icon={feature2.icon} title={feature2.title} text={feature2.text} buttonText={feature2.buttonText}/>
          <Card icon={feature3.icon} title={feature3.title} text={feature3.text} buttonText={feature3.buttonText}/>
          <Card icon={feature4.icon} title={feature4.title} text={feature4.text} buttonText={feature4.buttonText}/>
          <Card icon={feature5.icon} title={feature5.title} text={feature5.text} buttonText={feature5.buttonText}/>
          <Card icon={feature6.icon} title={feature6.title} text={feature6.text} buttonText={feature6.buttonText}/>
        </div>
      </div>
    </>
  );
}

export default Features;
