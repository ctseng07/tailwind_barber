import { services, serviceTabs } from "../constants";
import ServiceCard from "../components/ServiceCard";
import ServiceTab from "../components/ServiceTab";

const Services = () => {
  return (
<section 
id="services"
className="padding">
  <div className="flex justify-center flex-wrap gap-4 mb-5 max-sm:gap-5 max-container">
  {serviceTabs.map((service) => (
  <ServiceTab key={service.label} {...service} />
  ))}
  </div>
  <div className="flex justify-center flex-wrap gap-9 max-container">
{services.map((service) => (
  <ServiceCard key={service.label} {...service} />
))}
</div>
</section >
  )
}

export default Services
