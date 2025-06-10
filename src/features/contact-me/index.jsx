import { FaPhone, FaMailBulk } from 'react-icons/fa';
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
                  <p className="text-gray-600 text-justify">(+84) 877 289 816</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center mb-4">
                  <FaMailBulk className="text-2xl text-blue-600 mr-4" />
                  <p className="text-gray-600 text-justify">qhoang.devvietnam@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeView;
