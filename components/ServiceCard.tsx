import React from 'react';
import { ServiceItem } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const Icon = service.icon;
  
  return (
    <div className={`group relative flex flex-col p-8 rounded-xl transition-all duration-300 border ${
      featured 
        ? 'bg-slate-900 border-slate-700 text-white shadow-xl ring-1 ring-orange-500/20' 
        : 'bg-white border-slate-200 hover:border-orange-200 hover:shadow-lg'
    }`}>
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
        featured ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600'
      }`}>
        <Icon size={32} strokeWidth={2} />
      </div>
      
      <h3 className={`text-2xl font-bold mb-5 ${featured ? 'text-white' : 'text-slate-900'}`}>
        {service.title}
      </h3>
      
      <p className={`mb-10 text-lg leading-relaxed flex-grow ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
        {service.description}
      </p>

      <div className="mt-auto">
        <Link 
          to={`/services/${service.id}`}
          className={`inline-flex items-center text-lg font-bold transition-colors ${
            featured ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'
          }`}
        >
          자세히 보기 <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;