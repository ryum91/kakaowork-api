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

export const createTextBlock = ({ text, inlines }: Exclude<TextBlock, 'type'>): TextBlock => {
  return {
    type: 'text',
    text,
    inlines
  };
};

export const createImageLinkBlock = (url: string): ImageLinkBlock => {
  return {
    type: 'image_link',
    url
  };
};

export const createButtonBlock = ({
  text,
  style,
  action_type,
  action_name,
  value
}: Exclude<ButtonBlock, 'type'>): ButtonBlock => {
  return {
    type: 'button',
    text,
    style,
    action_type,
    action_name,
    value
  };
};

export const createDividerBlock = (): DividerBlock => {
  return {
    type: 'divider'
  };
};

export const createHeaderBlock = ({ text, style }: Exclude<HeaderBlock, 'type'>): HeaderBlock => {
  return {
    type: 'header',
    text,
    style
  };
};

export const createActionBlock = (elements: ButtonBlock[]): ActionBlock => {
  return {
    type: 'action',
    elements
  };
};

export const createDescriptionBlock = ({
  term,
  content,
  accent
}: Exclude<DescriptionBlock, 'type'>): DescriptionBlock => {
  return {
    type: 'description',
    accent,
    term,
    content
  };
};

export const createSectionBlock = ({ content, accessory }: Exclude<SectionBlock, 'type'>): SectionBlock => {
  return {
    type: 'section',
    accessory,
    content
  };
};

export const createContextBlock = ({ content, image }: Exclude<ContextBlock, 'type'>): ContextBlock => {
  return {
    type: 'context',
    content,
    image
  };
};

export const createLabelBlock = ({ text, markdown }: Exclude<LabelBlock, 'type'>): LabelBlock => {
  return {
    type: 'label',
    markdown,
    text
  };
};

export const createInputBlock = ({ name, placeholder, required }: Exclude<InputBlock, 'type'>): InputBlock => {
  return {
    type: 'input',
    name,
    placeholder,
    required
  };
};

export const createSelectBlock = ({
  name,
  options,
  placeholder,
  required
}: Exclude<SelectBlock, 'type'>): SelectBlock => {
  return {
    type: 'select',
    name,
    options,
    placeholder,
    required
  };
};
