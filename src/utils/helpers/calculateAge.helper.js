const calculateAge = (birthDateStr) => {
  const birthDate = new Date(birthDateStr);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default calculateAge;
