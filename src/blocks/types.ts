/**
 * MessageBlock 체크 용도의 Type입니다.
 * 해당 Type을 Extends 받은 Block은 Message 구성에만 사용할 수 있습니다.
 */
export interface MessageBlock {
  type: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/textblock/#inlines
 */
export interface TextBlockInline {
  type: 'styled' | 'link';
  text: string;
  bold?: boolean;
  italic?: boolean;
  strike?: boolean;
  color?: 'default' | 'red' | 'blue' | 'grey';
  url?: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/textblock/
 */
export interface TextBlock extends MessageBlock {
  type: 'text';
  text: string;
  inlines?: TextBlockInline[];
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/imagelinkblock/
 */
export interface ImageLinkBlock extends MessageBlock {
  type: 'image_link';
  url: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/buttonblock/
 */
export interface ButtonBlock extends MessageBlock {
  type: 'button';
  text: string;
  style: 'default' | 'primary' | 'danger';
  action_type?: 'open_inapp_browser' | 'open_system_browser' | 'open_external_app' | 'call_modal' | 'submit_action';
  action_name?: string;
  value?: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/dividerblock/
 */
export interface DividerBlock extends MessageBlock {
  type: 'divider';
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/headerblock/
 */
export interface HeaderBlock extends MessageBlock {
  type: 'header';
  text: string;
  style: 'blue' | 'red' | 'yellow';
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/actionblock/
 */
export interface ActionBlock extends MessageBlock {
  type: 'action';
  elements: ButtonBlock[];
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/descriptionblock/
 */
export interface DescriptionBlock extends MessageBlock {
  type: 'description';
  content: TextBlock;
  term: string;
  accent?: boolean;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/sectionblock/
 */
export interface SectionBlock extends MessageBlock {
  type: 'section';
  content: TextBlock;
  accessory: ImageLinkBlock;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/contextblock/
 */
export interface ContextBlock extends MessageBlock {
  type: 'context';
  content: TextBlock;
  image: ImageLinkBlock;
}

/**
 * ModalBlock 체크 용도의 Type입니다.
 * 해당 Type을 Extends 받은 Block은 Modal 구성에만 사용할 수 있습니다.
 */
export interface ModalBlock {
  type: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/labelblock/
 */
export interface LabelBlock extends ModalBlock {
  type: 'label';
  text: string;
  markdown: boolean;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/inputblock/
 */
export interface InputBlock extends ModalBlock {
  type: 'input';
  name: string;
  required?: boolean;
  placeholder?: string;
}

export interface SelectBlockOption {
  text: string;
  value: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/blockkit/selectblock/
 */
export interface SelectBlock extends ModalBlock {
  type: 'select';
  name: string;
  options: SelectBlockOption[];
  required?: boolean;
  placeholder?: string;
}
