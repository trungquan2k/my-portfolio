import { Button } from 'antd';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Paragraph, { AppTextAlign, AppTextVariant } from '../../components/ui/text_custom';

const ContactMeView = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          mb={10}
          className="underline"
        >
          Contact Me
        </Paragraph>
        {/* Contact Information and Form in a Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <div className="lg:w-1/2 rounded-lg pt-8">
            <div className="space-y-8">
              {/* Call Us */}
              <div>
                <Paragraph
                  variant={AppTextVariant.H3}
                  align={AppTextAlign.START}
                  className="italic"
                  mb={4}
                >
                  Get in Touch
                </Paragraph>
                <div className="flex items-center mb-4">
                  <FaPhone className="text-2xl text-blue-600 mr-4" />
                  <p className="text-gray-600 text-justify">(+84) 355 739 816</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600 mr-4" />
                  <p className="text-gray-600 text-justify">Phường 15, Tân Bình, Hồ Chí Minh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 rounded-lg  p-8">
            <form>
              <div className="mb-8">
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-8">
                <input
                  type="email"
                  id="email"
                  className="w-full px-2 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <Button
                type="primary"
                className="w-40 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors h-10"
                onClick={() => (window.location.href = 'https://www.facebook.com/quanht2k/')}
              >
                Book me now{' '}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeView;
