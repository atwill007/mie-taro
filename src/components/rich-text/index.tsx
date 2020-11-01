import classNames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import { MieRichTextProps, MieRichTextState } from "types/rich-text";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import BaseComponent from "../BaseComponent";
import { envInfo } from "../../common/utils";

export default class MieRichText extends BaseComponent<
  MieRichTextProps,
  MieRichTextState
> {
  public static defaultProps: MieRichTextProps = {
    html: "",
    customStyle: {},
    styleText: `
      img {
        max-width: 100%;
      }
    `
  };
  public static propTypes: InferProps<MieRichTextProps> = {
    html: PropTypes.string,
    styleText: PropTypes.string
  };

  config = {
    usingComponents: {
      parser: "./parser/parser"
    }
  };

  public constructor(props: MieRichTextProps) {
    super(props);
    this.state = {
      isWEB: envInfo.isWEB
    };
  }

  public render(): JSX.Element {
    const { className, customStyle, html, styleText } = this.props;
    let fullHtml = html;
    if (styleText) {
      const st = `<style>${styleText}</style>`;
      fullHtml = `${st}${html}`;
    }

    if (this.state.isWEB) {
      return (
        <div
          className={classNames("mie-rich-text", className)}
          // @ts-ignore
          style={customStyle}
          dangerouslySetInnerHTML={{ __html: fullHtml }}
        ></div>
      );
    }
    return (
      <View
        className={classNames("mie-rich-text", className)}
        style={customStyle}
      >
        {/* @ts-ignore */}
        <parser html={fullHtml} linkpress={this.handleLinkpress}></parser>
      </View>
    );
  }
}
