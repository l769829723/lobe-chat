'use client';

import dynamic from 'next/dynamic';
import { memo, useEffect } from 'react';

import { useMarketStore } from '@/store/market';

import AgentCard from '../features/AgentCard';
import CardRender from './features/AgentCard';

const DetailModal = dynamic(() => import('./features/AgentDetail'), { ssr: false });

export default memo(() => {
  useEffect(() => {
    // refs: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#hashydrated
    useMarketStore.persist.rehydrate();
  }, []);

  return (
    <>
      <AgentCard CardRender={CardRender} mobile />
      <DetailModal />
    </>
  );
});
