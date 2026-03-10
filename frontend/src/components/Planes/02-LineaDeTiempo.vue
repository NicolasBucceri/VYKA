<template>
  <section v-if="proceso?.length" class="timeline">
    <header class="timeline-header">
      <div class="timeline-kicker-wrap">
        <span class="timeline-kicker-line"></span>
        <p class="timeline-eyebrow">
          {{ t("planDetail.timeline.eyebrow") }}
        </p>
        <span class="timeline-kicker-line"></span>
      </div>

      <h2 class="timeline-title">
        {{ t("planDetail.timeline.title") }}
      </h2>

      <p class="timeline-desc">
        {{ t("planDetail.timeline.desc") }}
      </p>
    </header>

    <div class="timeline-divider"></div>

    <div class="timeline-fases">
      <FaseProceso
        v-for="fase in proceso"
        :key="fase.numero"
        :fase="fase"
      />
    </div>
  </section>
</template>

<script setup>
import { useLang } from "@/composables/useLang";
import FaseProceso from "@/components/ui/Planes/FaseProceso.vue";

defineProps({
  proceso: {
    type: Array,
    default: () => [],
  },
});

const { t } = useLang();
</script>

<style scoped>
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin-top: 3rem;
  padding: 1.2rem 0 0.5rem;
}

.timeline-header {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.95rem;
  text-align: center;
}

.timeline-kicker-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
}

.timeline-kicker-line {
  width: 42px;
  height: 1px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(109, 93, 246, 0.9),
    rgba(45, 140, 255, 0.7)
  );
  box-shadow: 0 0 10px rgba(109, 93, 246, 0.2);
}

.timeline-eyebrow {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
}

.timeline-title {
  margin: 0;
  max-width: 920px;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.02;
  font-weight: 750;
  color: #f5f7ff;
  text-wrap: balance;
}

.timeline-desc {
  margin: 0;
  max-width: 820px;
  font-size: 1.04rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  text-wrap: balance;
}

.timeline-divider {
  position: relative;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.01) 0%,
    rgba(109, 93, 246, 0.34) 22%,
    rgba(45, 140, 255, 0.22) 50%,
    rgba(109, 93, 246, 0.34) 78%,
    rgba(255, 255, 255, 0.01) 100%
  );
  overflow: hidden;
}

.timeline-divider::after {
  content: "";
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(109, 93, 246, 0),
    rgba(109, 93, 246, 0.38),
    rgba(45, 140, 255, 0.28),
    rgba(109, 93, 246, 0)
  );
  filter: blur(10px);
  opacity: 0.8;
}

.timeline-fases {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

@media (max-width: 768px) {
  .timeline {
    gap: 2.2rem;
    margin-top: 2.2rem;
    padding-top: 0.8rem;
  }

  .timeline-header {
    gap: 0.8rem;
  }

  .timeline-kicker-wrap {
    gap: 0.65rem;
  }

  .timeline-kicker-line {
    width: 30px;
  }

  .timeline-eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
  }

  .timeline-title {
    font-size: clamp(1.8rem, 9vw, 2.45rem);
    line-height: 1.08;
  }

  .timeline-desc {
    font-size: 0.97rem;
    line-height: 1.7;
  }

  .timeline-fases {
    gap: 2.5rem;
  }
}

@media (max-width: 480px) {
  .timeline-title {
    font-size: 1.7rem;
  }

  .timeline-desc {
    font-size: 0.93rem;
  }
}
</style>