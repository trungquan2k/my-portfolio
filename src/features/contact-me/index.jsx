import { FaPhone, FaMailBulk } from 'react-icons/fa';
import Paragraph, { AppTextAlign, AppTextVariant } from '../../components/ui/text_custom';
import NavLink from '../../components/ui/nav-link/nav-link';
const ContactMeView = () => {
  return (
    <div>
      <div className="container mx-auto pt-12">
        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          mb={10}
          className="underline"
        >
          Contact Me
        </Paragraph>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 rounded-lg pt-8">
            <div className="space-y-8">
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
                  <p className="text-white text-justify">(+84) 355 739 816</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaMailBulk className="text-2xl text-blue-600 mr-4" />
                  <p className="text-white text-justify">qhoang.devvietnam@gmail.com</p>
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
