import httpService from './http.service';

const testimonialsEndpoint = 'testimonials/';

const createTestimonial = async (id, payload) => {
  const { data } = await httpService.put(testimonialsEndpoint + id, payload);
  return data;
};

const getTestimonials = async () => {
  const { data } = await httpService.get(testimonialsEndpoint);
  return data;
};

const testimonialsService = {
  getTestimonials,
  createTestimonial,
};

export default testimonialsService;
