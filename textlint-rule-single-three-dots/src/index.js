"use strict";
import { RuleHelper } from "textlint-rule-helper";
import { matchCaptureGroupAll } from "match-index";
const ThreeDotsRegExp = /(…{2,})/g;
module.exports = function reporter(context) {
  const { Syntax, RuleError, report, fixer, getSource } = context;
  const helper = new RuleHelper(context);
  return {
    [Syntax.Str](node) {
      if (
        helper.isChildNode(node, [
          Syntax.Link,
          Syntax.Image,
          Syntax.BlockQuote,
          Syntax.Emphasis,
        ])
      ) {
        return;
      }
      const nodeText = getSource(node);
      matchCaptureGroupAll(nodeText, ThreeDotsRegExp).forEach(
        ({ text, index }) => {
          const ruleError = new RuleError(
            `３点リーダーが続いています ……: "${text}"`,
            {
              index: index + 1,
            }
          );
          report(node, ruleError);
        }
      );
    },
  };
};
