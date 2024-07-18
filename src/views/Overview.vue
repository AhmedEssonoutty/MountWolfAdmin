<template>
  <div class="main-body " style="padding: 5rem 0 8rem">
    <div class="custom-container">
      <!-- management section -->
      <ManagementSection></ManagementSection>
      <!-- statistics section -->
      <StatisticsSection></StatisticsSection>
      <!-- info cards -->

      <BoxRow :row-title="'System Performance(to be viewed)'"
        :btns-data="[{ name: 'System availability', data: 'UP' }, { name: 'CPU usage', data: '00' }, { name: 'memory usage', data: '00' }, { name: 'Disk space', data: '00' }]">
      </BoxRow>

      <BoxRow :row-title="'Financial Metrics'"
        :btns-data="[{ name: 'All payments', data: '$1,380' }, { name: 'Succeeded', data: '$1,380' }, { name: 'Pending', data: '$1,380' }, { name: 'Failed', data: '$1,380' }]">
      </BoxRow>
    </div>
  </div>
</template>

<script setup>
import ManagementSection from '@/components/page-component/overview/managements/ManagementSection.vue';
import StatisticsSection from '@/components/page-component/overview/statisticals/StatisticsSection.vue';
import BoxRow from '@/components/page-component/overview/BoxData/BoxRow.vue';
</script>

<style lang="scss" scoped></style>