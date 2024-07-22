"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TagManager from 'react-gtm-module';

import * as styled from './style';
import { useLanguage } from '../../context/LanguageContext';

export default function ThreeSteps() {
  const [isHover, setIsHover] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const router = useRouter();
  const { t, language } = useLanguage();

  function handleClick() {
    // Push event to GTM
    TagManager.dataLayer({
      dataLayer: {
        event: 'click',
        category: 'navigation',
        action: 'click',
        label: 'CTA_main_templates',
        pageURL: window.location.pathname
      }
    });

    router.push(`${language}/templates`);
  }

  function handleMouseEvent(event) {
    if (event.type === "mouseenter") {
      const id = event?.target?.id;
      setTargetId(id);
      setIsHover(true);
    } else if (event.type === "mouseleave") {
      setTargetId(null);
      setIsHover(false);
    }
  }

  return (
    <styled.ThreeStepsWrapper>
      <styled.SnippetWrapper>
        <styled.SnippetTitle>{t('threeBuySteps.title')}</styled.SnippetTitle>
        <styled.SnippetDescription>{t('threeBuySteps.description')}</styled.SnippetDescription>
      </styled.SnippetWrapper>
      <styled.StepsWrapper>
        <styled.Step id={1} onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
          <styled.StepNumber id={1} $stepId={1} $targetId={targetId} $isHover={isHover}>1</styled.StepNumber>
          <styled.StepSnippet id={1}>{t('threeBuySteps.steps.step_one.snippet')}</styled.StepSnippet>
          <styled.StepInstruction id={1}>{t('threeBuySteps.steps.step_one.instruction')}</styled.StepInstruction>
        </styled.Step>
        <styled.ArrowIcon size="4em" />
        <styled.Step id={2} onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
          <styled.StepNumber id={2} $stepId={2} $targetId={targetId} $isHover={isHover}>2</styled.StepNumber>
          <styled.StepSnippet id={2}>{t('threeBuySteps.steps.step_two.snippet')}</styled.StepSnippet>
          <styled.StepInstruction id={2}>{t('threeBuySteps.steps.step_two.instruction')}</styled.StepInstruction>
        </styled.Step>
        <styled.ArrowIcon size="4em" />
        <styled.Step id={3} onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
          <styled.StepNumber id={3} $stepId={3} $targetId={targetId} $isHover={isHover}>3</styled.StepNumber>
          <styled.StepSnippet id={3}>{t('threeBuySteps.steps.step_three.snippet')}</styled.StepSnippet>
          <styled.StepInstruction id={3}>{t('threeBuySteps.steps.step_three.instruction')}</styled.StepInstruction>
        </styled.Step>
      </styled.StepsWrapper>

      <styled.CTAContainer>
        <styled.CTA onClick={handleClick}>{t('threeBuySteps.CTA')}</styled.CTA>
        <styled.CTABottom></styled.CTABottom>
        <styled.CTAShadow></styled.CTAShadow>
      </styled.CTAContainer>
    </styled.ThreeStepsWrapper>
  );
}
