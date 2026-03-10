export const getPlanById = (planes, id) => {
  const planId = Number(id);
  return planes.find((plan) => plan.id === planId) || null;
};

export const getPlanBySlug = (planes, slug) => {
  return planes.find((plan) => plan.slug === slug) || null;
};