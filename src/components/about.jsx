import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import SkillBar from "../components/skillBar";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="fle
            <p className="text-lg mb-8">
             I am a Leading modernization of a legacy banking platform into a cloud-native distributed microservices ecosystem using Java
              17, Spring Boot, AWS, and Kubernetes supporting over 2M+ daily financial transactions. Designed scalable
              containerized services deployed on Amazon EKS with Kafka-driven event processing, Redis caching, secure API
              gateways, and enterprise observability solutions.
            </p>
            <div className="space-y-4">
              <SkillBar skillName="HTML & CSS" proficiency="90.00" />
              <SkillBar skillName="React JS" proficiency="75.00" />
              <SkillBar skillName="Node JS" proficiency="60.00" />
              <SkillBar skillName="Spring Boot" proficiency="60.00" />
              <SkillBar skillName="MongoDB" proficiency="55.90" />
              <SkillBar skillName="MySQL" proficiency="60.0" />
              <SkillBar skillName="Git" proficiency="80.00" />
              <SkillBar skillName="Tailwind CSS" proficiency="75.00" />
              <SkillBar skillName="Bootstrap" proficiency="55.78" />
              <SkillBar skillName="Java" proficiency="80.00" />
              <SkillBar skillName="JavaScript" proficiency="75.0" />
              <SkillBar skillName="Python" proficiency="30.00" />
              <SkillBar skillName="C++" proficiency="68.57" />
              <SkillBar skillName="SQL" proficiency="55.98" />
              <SkillBar skillName="Firebase" proficiency="40.56" />
              <SkillBar skillName="Heroku" proficiency="40.52" />
              <SkillBar skillName="Netlify" proficiency="45.68" />
              <SkillBar skillName="Vercel" proficiency="54.25" />
              <SkillBar skillName="Docker" proficiency="55.02" />
              <SkillBar skillName="Kubernetes" proficiency="55.05" />
              <SkillBar skillName="AWS" proficiency="65.02" />
            </div>

            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  4+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  30+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
