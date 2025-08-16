import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useQuery } from '../lib/useQuery';

/**
 * Contact component.
 * Displays contact information.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Contact() {
  const { data } = useQuery('/contact');

  return (
    <section>
      <div className="flex items-center justify-center">
        {/* {loading && <p>Loading...</p>} */}
        {/* {error && <p>Error: {error.message}</p>} */}
        {data && data[0] && (
          <div className="flex items-center space-x-2">
            {/** Email */}
            {data[0].email && (
              <>
                <a
                  href={`mailto:${data[0].email}`}
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </>
            )}
            {/** LinkedIn */}
            {data[0].linkedin && (
              <>
                <a
                  href={data[0].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <SiLinkedin className="w-6 h-6" />
                </a>
              </>
            )}
            {/** GitHub */}
            {data[0].github && (
              <>
                <a
                  href={data[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              </>
            )}
            {/** Phone Number */}
            {data[0].mobileNum && (
              <>
                <a href={`tel:${data[0].mobileNum}`} className="text-blue-500">
                  <FaPhoneAlt className="w-6 h-6" />
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
