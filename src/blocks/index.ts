import {
  TextBlock,
  ImageLinkBlock,
  ButtonBlock,
  DividerBlock,
  HeaderBlock,
  ActionBlock,
  DescriptionBlock,
  SectionBlock,
  ContextBlock,
  LabelBlock,
  InputBlock,
  SelectBlock
} from './types';

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/textblock/
 *
 * @param param0
 * @returns
 */
export const textBlock = ({ text, inlines }: Omit<TextBlock, 'type'>): TextBlock => {
  return {
    type: 'text',
    text,
    inlines
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/imagelinkblock/
 *
 * @param url
 * @returns
 */
export const imageLinkBlock = (url: string): ImageLinkBlock => {
  return {
    type: 'image_link',
    url
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/buttonblock/
 *
 * @param param0
 * @returns
 */
export const buttonBlock = ({
  text,
  style,
  action_type,
  action_name,
  value
}: Omit<ButtonBlock, 'type'>): ButtonBlock => {
  return {
    type: 'button',
    text,
    style,
    action_type,
    action_name,
    value
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/dividerblock/
 *
 * @returns
 */
export const dividerBlock = (): DividerBlock => {
  return {
    type: 'divider'
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/headerblock/
 *
 * @param param0
 * @returns
 */
export const headerBlock = ({ text, style }: Omit<HeaderBlock, 'type'>): HeaderBlock => {
  return {
    type: 'header',
    text,
    style
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/actionblock/
 *
 * @param elements
 * @returns
 */
export const actionBlock = (elements: ButtonBlock[]): ActionBlock => {
  return {
    type: 'action',
    elements
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/descriptionblock/
 *
 * @param param0
 * @returns
 */
export const descriptionBlock = ({ term, content, accent }: Omit<DescriptionBlock, 'type'>): DescriptionBlock => {
  return {
    type: 'description',
    accent,
    term,
    content
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/sectionblock/
 *
 * @param param0
 * @returns
 */
export const sectionBlock = ({ content, accessory }: Omit<SectionBlock, 'type'>): SectionBlock => {
  return {
    type: 'section',
    accessory,
    content
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/contextblock/
 *
 * @param param0
 * @returns
 */
export const contextBlock = ({ content, image }: Omit<ContextBlock, 'type'>): ContextBlock => {
  return {
    type: 'context',
    content,
    image
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/labelblock/
 *
 * @param param0
 * @returns
 */
export const labelBlock = ({ text, markdown }: Omit<LabelBlock, 'type'>): LabelBlock => {
  return {
    type: 'label',
    markdown,
    text
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/inputblock/
 *
 * @param param0
 * @returns
 */
export const inputBlock = ({ name, placeholder, required }: Omit<InputBlock, 'type'>): InputBlock => {
  return {
    type: 'input',
    name,
    placeholder,
    required
  };
};

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/selectblock/
 *
 * @param param0
 * @returns
 */
export const selectBlock = ({ name, options, placeholder, required }: Omit<SelectBlock, 'type'>): SelectBlock => {
  return {
    type: 'select',
    name,
    options,
    placeholder,
    required
  };
};
