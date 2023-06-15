import PropTypes from "prop-types";
import { Card,  CardBody, Avatar , Button} from "@material-tailwind/react";

function ProjectCard({img, name, link}) {
  return (
    <div className="">
    <Card color="transparent"  shadow={false} className="grid">
        <Avatar 
        src={img} 
        alt={name}
        size="xl" 
        className="h-60 w-60 rounded-md mt-6 border-2 transition duration-300 ease-in-out hover:opacity-60" 
        />
      <CardBody className="text-center mt-4 ">
      <a href={link} target={"_blank"} className="text-center cursor-pointer text-2xl hover:text-blue-600">
        {name} 
      </a>
      </CardBody>
    </Card>
    </div>
  );  
} 


ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  link: PropTypes.string,

}; 

ProjectCard.displayName = "/src/components/projects-card.jsx";

export default ProjectCard;    
