import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ParticleOptions from "../Styles/ParticleOptions.json";

const Particle = () => {
  type ParticleOptionsType = Record<string, unknown>;

  const ParticleInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      options={ParticleOptions as ParticleOptionsType}
      init={ParticleInit}
    />
  );
};

export default Particle;
