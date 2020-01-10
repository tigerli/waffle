/* eslint-disable quotes */
let lightTheme = {
    '@ant-prefix': "ant",
    '@iconfont-css-prefix': "anticon",
    // '@primary-color': "@blue-6",
    '@success-color': "@green-6",
    '@info-color': "@blue-6",
    '@warning-color': "@gold-6",
    '@error-color': "@red-5",
    '@highlight-color': "@red-5",
    '@processing-color': "@blue-6",
    '@body-background': "#fff",
    '@component-background': "#fff",
    '@icon-color': "inherit",
    '@icon-color-hover': "fade(@black, 75%)",
    '@heading-color': "fade(#000, 85%)",
    '@text-color': "fade(@black, 65%)",
    '@text-color-secondary': "fade(@black, 45%)",
    '@text-color-inverse': "@white",
    '@heading-color-dark': "fade(@white, 100%)",
    '@text-color-dark': "fade(@white, 85%)",
    '@text-color-secondary-dark': "fade(@white, 65%)",
    '@text-selection-bg': "@primary-color",
    '@border-color-base': "hsv(0, 0, 85%) ",
    '@border-color-split': "hsv(0, 0, 94%) ",
    '@border-color-inverse': "@white",
    '@border-width-base': "1px",
    '@border-style-base': "solid ",
    // 
    '@layout-body-background': "#f0f2f5",
    '@layout-header-background': "#FFF",
    '@layout-footer-background': "@layout-body-background",
    '@layout-header-height': "64px",
    '@layout-header-padding': "0 50px",
    '@layout-footer-padding': "24px 50px",
    '@layout-sider-background': "@layout-header-background",
    '@layout-trigger-height': "48px",
    '@layout-trigger-background': "#002140",
    '@layout-trigger-color': "#fff",
    '@layout-zero-trigger-width': "36px",
    '@layout-zero-trigger-height': "42px",
    '@layout-sider-background-light': "#fff",
    '@layout-trigger-background-light': "#fff",
    '@layout-trigger-color-light': "@text-color",
    
    '@font-family': "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',",
    '@code-family': "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    '@font-variant-base': "tabular-nums",
    '@font-feature-settings-base': "'tnum'",
    '@font-size-base': "14px",
    '@font-size-sm': "12px",
    '@line-height-base': "1.5",
    '@border-radius-base': "2px",
    '@border-radius-sm': "2px",
    '@padding-lg': "24px",
    '@padding-md': "16px",
    '@padding-sm': "12px",
    '@padding-xs': "8px",
    '@disabled-color': "fade(#000, 25%)",
    '@disabled-bg': "@background-color-base",
    '@disabled-color-dark': "fade(#fff, 35%)",
    '@link-color': "@primary-color",
    '@link-decoration': "none",
    '@link-hover-decoration': "none",
    '@outline-blur-size': "0px",
    '@outline-width': "2px",
    '@outline-color': "@primary-color",
    '@background-color-light': "hsv(0, 0, 98%) ",
    '@background-color-base': "hsv(0, 0, 96%) ",
    '@item-active-bg': "@primary-1",
    '@item-hover-bg': "#f5f5f5",
    '@shadow-color': "rgba(0, 0, 0, 0.15)",
    '@shadow-color-inverse': "@component-background",
    '@box-shadow-base': "@shadow-2",
    '@shadow-1-up': "0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05),",
    '@shadow-1-down': "0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),",
    '@shadow-1-left': "-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05),",
    '@shadow-1-right': "6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),",
    '@shadow-2': "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),",
    '@btn-font-weight': "400",
    '@btn-border-radius-base': "@border-radius-base",
    '@btn-border-radius-sm': "@border-radius-base",
    '@btn-border-width': "@border-width-base",
    '@btn-border-style': "@border-style-base",
    '@btn-shadow': "0 2px 0 rgba(0, 0, 0, 0.015)",
    '@btn-primary-shadow': "0 2px 0 rgba(0, 0, 0, 0.045)",
    '@btn-text-shadow': "0 -1px 0 rgba(0, 0, 0, 0.12)",
    '@btn-primary-color': "#fff",
    '@btn-primary-bg': "@primary-color",
    '@btn-default-color': "@text-color",
    '@btn-default-bg': "@component-background",
    '@btn-default-border': "@border-color-base",
    '@btn-danger-color': "#fff",
    '@btn-danger-bg': "@error-color",
    '@btn-danger-border': "@error-color",
    '@btn-disable-color': "@disabled-color",
    '@btn-disable-bg': "@disabled-bg",
    '@btn-disable-border': "@border-color-base",
    '@btn-padding-base': "0 @padding-md - 1px",
    '@btn-font-size-lg': "@font-size-lg",
    '@btn-font-size-sm': "@font-size-base",
    '@btn-padding-lg': "@btn-padding-base",
    '@btn-padding-sm': "0 @padding-xs - 1px",
    '@btn-height-base': "32px",
    '@btn-height-lg': "40px",
    '@btn-height-sm': "24px",
    '@btn-circle-size': "@btn-height-base",
    '@btn-circle-size-lg': "@btn-height-lg",
    '@btn-circle-size-sm': "@btn-height-sm",
    '@btn-group-border': "@primary-5",
    '@checkbox-size': "16px",
    '@checkbox-color': "@primary-color",
    '@checkbox-check-color': "#fff",
    '@checkbox-border-width': "@border-width-base",
    '@dropdown-selected-color': "@primary-color",
    '@dropdown-vertical-padding': "5px",
    '@dropdown-line-height': "22px",
    '@dropdown-font-size': "@font-size-base",
    '@empty-font-size': "@font-size-base",
    '@radio-size': "16px",
    '@radio-dot-color': "@primary-color",
    '@radio-button-bg': "@btn-default-bg",
    '@radio-button-checked-bg': "@btn-default-bg",
    '@radio-button-color': "@btn-default-color",
    '@radio-button-hover-color': "@primary-5",
    '@radio-button-active-color': "@primary-7",
    '@screen-xs': "480px",
    '@screen-xs-min': "@screen-xs",
    '@screen-sm': "576px",
    '@screen-sm-min': "@screen-sm",
    '@screen-md': "768px",
    '@screen-md-min': "@screen-md",
    '@screen-lg': "992px",
    '@screen-lg-min': "@screen-lg",
    '@screen-xl': "1200px",
    '@screen-xl-min': "@screen-xl",
    '@screen-xxl': "1600px",
    '@screen-xxl-min': "@screen-xxl",
    '@grid-columns': "24",
    '@grid-gutter-width': "0",
    '@zindex-table-fixed': "auto",
    '@zindex-affix': "10",
    '@zindex-back-top': "10",
    '@zindex-badge': "10",
    '@zindex-picker-panel': "10",
    '@zindex-popup-close': "10",
    '@zindex-modal': "1000",
    '@zindex-modal-mask': "1000",
    '@zindex-message': "1010",
    '@zindex-notification': "1010",
    '@zindex-popover': "1030",
    '@zindex-dropdown': "1050",
    '@zindex-picker': "1050",
    '@zindex-tooltip': "1060",
    '@animation-duration-slow': "0.3s",
    '@animation-duration-base': "0.2s",
    '@animation-duration-fast': "0.1s",
    '@collapse-panel-border-radius': "@border-radius-base",
    '@label-required-color': "@highlight-color",
    '@label-color': "@heading-color",
    '@form-warning-input-bg': "@input-bg",
    '@form-item-margin-bottom': "24px",
    '@form-item-trailing-colon': "true",
    '@form-vertical-label-padding': "0 0 8px",
    '@form-vertical-label-margin': "0",
    '@form-error-input-bg': "@input-bg",
    '@input-height-base': "32px",
    '@input-height-lg': "40px",
    '@input-height-sm': "24px",
    '@input-padding-vertical-base': "4px",
    '@input-padding-vertical-sm': "1px",
    '@input-padding-vertical-lg': "6px",
    '@input-placeholder-color': "hsv(0, 0, 75%)",
    '@input-color': "@text-color",
    '@input-border-color': "@border-color-base",
    '@input-bg': "@component-background",
    '@input-number-handler-active-bg': "#f4f4f4",
    '@input-addon-bg': "@background-color-light",
    '@input-hover-border-color': "@primary-5",
    '@input-disabled-bg': "@disabled-bg",
    '@input-outline-offset': "0 0",
    '@select-border-color': "@border-color-base",
    '@select-item-selected-font-weight': "600px",
    '@tooltip-max-width': "250px",
    '@tooltip-color': "#fff",
    '@tooltip-bg': "rgba(0, 0, 0, 0.75)",
    '@tooltip-arrow-width': "5px",
    '@tooltip-distance': "@tooltip-arrow-width - 1px + 4px",
    '@tooltip-arrow-color': "@tooltip-bg",
    '@popover-bg': "@component-background",
    '@popover-color': "@text-color",
    '@popover-min-width': "177px",
    '@popover-arrow-width': "6px",
    '@popover-arrow-color': "@popover-bg",
    '@popover-arrow-outer-color': "@popover-bg",
    '@popover-distance': "@popover-arrow-width + 4px",
    '@modal-body-padding': "24px",
    '@modal-header-bg': "@component-background",
    '@modal-footer-bg': "transparent",
    '@modal-mask-bg': "fade(@black, 45%)",
    '@progress-default-color': "@processing-color",
    '@progress-remaining-color': "@background-color-base",
    '@progress-text-color': "@text-color",
    '@progress-radius': "100px",
    '@menu-inline-toplevel-item-height': "40px",
    '@menu-item-height': "40px",
    '@menu-collapsed-width': "80px",
    '@menu-bg': "@component-background",
    '@menu-popup-bg': "@component-background",
    '@menu-item-color': "@text-color",
    '@menu-highlight-color': "@primary-color",
    '@menu-item-active-bg': "@primary-1",
    '@menu-item-active-border-width': "3px",
    '@menu-item-group-title-color': "@text-color-secondary",
    '@menu-dark-color': "@text-color-secondary-dark",
    '@menu-dark-bg': "@layout-header-background",
    '@menu-dark-arrow-color': "#fff",
    '@menu-dark-submenu-bg': "#000c17",
    '@menu-dark-highlight-color': "#fff",
    '@menu-dark-item-active-bg': "@primary-color",
    '@spin-dot-size-sm': "14px",
    '@spin-dot-size': "20px",
    '@spin-dot-size-lg': "32px",
    '@table-header-bg': "@background-color-light",
    '@table-header-color': "@heading-color",
    '@table-header-sort-bg': "@background-color-base",
    '@table-body-sort-bg': "rgba(0, 0, 0, 0.01)",
    '@table-row-hover-bg': "@item-hover-bg",
    '@table-selected-row-color': "inherit",
    '@table-selected-row-bg': "@primary-1",
    '@table-body-selected-sort-bg': "@table-selected-row-bg",
    '@table-selected-row-hover-bg': "@table-selected-row-bg",
    '@table-expanded-row-bg': "#fbfbfb",
    '@table-padding-vertical': "16px",
    '@table-padding-horizontal': "16px",
    '@table-border-radius-base': "@border-radius-base",
    '@tag-default-bg': "@background-color-light",
    '@tag-default-color': "@text-color",
    '@tag-font-size': "@font-size-sm",
    '@time-picker-panel-column-width': "56px",
    '@time-picker-panel-width': "@time-picker-panel-column-width * 3",
    '@time-picker-selected-bg': "@item-active-bg",
    '@carousel-dot-width': "16px",
    '@carousel-dot-height': "3px",
    '@carousel-dot-active-width': "24px",
    '@badge-color': "@error-color",
    '@badge-height': "20px",
    '@badge-dot-size': "6px",
    '@badge-font-size': "@font-size-sm",
    '@badge-font-weight': "normal",
    '@badge-status-size': "6px",
    '@badge-text-color': "@component-background",
    '@rate-star-color': "@yellow-6",
    '@rate-star-bg': "@border-color-split",
    '@card-head-color': "@heading-color",
    '@card-head-background': "transparent",
    '@card-head-padding': "16px",
    '@card-inner-head-padding': "12px",
    '@card-padding-base': "24px",
    '@card-actions-background': "@background-color-light",
    '@card-background': "@component-background",
    '@card-shadow': "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),",
    '@card-radius': "@border-radius-base",
    '@comment-padding-base': "16px 0",
    '@comment-nest-indent': "44px",
    '@comment-font-size-base': "@font-size-base",
    '@comment-font-size-sm': "@font-size-sm",
    '@comment-author-name-color': "@text-color-secondary",
    '@comment-author-time-color': "#ccc",
    '@comment-action-color': "@text-color-secondary",
    '@comment-action-hover-color': "#595959",
    '@tabs-card-head-background': "@background-color-light",
    '@tabs-card-height': "40px",
    '@tabs-card-active-color': "@primary-color",
    '@tabs-title-font-size': "@font-size-base",
    '@tabs-title-font-size-lg': "@font-size-lg",
    '@tabs-title-font-size-sm': "@font-size-base",
    '@tabs-ink-bar-color': "@primary-color",
    '@tabs-bar-margin': "0 0 16px 0",
    '@tabs-horizontal-margin': "0 32px 0 0",
    '@tabs-horizontal-padding': "12px 16px",
    '@tabs-horizontal-padding-lgr': "16px",
    '@tabs-horizontal-padding-sm': "8px 16px",
    '@tabs-vertical-padding': "8px 24px",
    '@tabs-vertical-margin': "0 0 16px 0",
    '@tabs-scrolling-size': "32px",
    '@tabs-highlight-color': "@primary-color",
    '@tabs-hover-color': "@primary-5",
    '@tabs-active-color': "@primary-7",
    '@tabs-card-gutter': "2px",
    '@tabs-card-tab-active-border-top': "2px solid transparent",
    '@back-top-color': "#fff",
    '@back-top-bg': "@text-color-secondary",
    '@back-top-hover-bg': "@text-color",
    '@avatar-size-base': "32px",
    '@avatar-size-lg': "40px",
    '@avatar-size-sm': "24px",
    '@avatar-font-size-base': "18px",
    '@avatar-font-size-lg': "24px",
    '@avatar-font-size-sm': "14px",
    '@avatar-bg': "#ccc",
    '@avatar-color': "#fff",
    '@avatar-border-radius': "@border-radius-base",
    '@switch-height': "22px",
    '@switch-sm-height': "16px",
    '@switch-sm-checked-margin-left': "-(@switch-sm-height - 3px)",
    '@switch-disabled-opacity': "0.4",
    '@switch-color': "@primary-color",
    '@switch-shadow-color': "fade(#00230b, 20%)",
    '@pagination-item-size': "32px",
    '@pagination-item-size-sm': "24px",
    '@pagination-font-weight-active': "500",
    '@pagination-font-family': "Arial",
    '@pagination-item-bg-active': "@component-background",
    '@page-header-padding-horizontal': "24px",
    '@page-header-padding-vertical': "16px",
    '@breadcrumb-base-color': "@text-color-secondary",
    '@breadcrumb-last-item-color': "@text-color",
    '@breadcrumb-font-size': "@font-size-base",
    '@breadcrumb-icon-font-size': "@font-size-base",
    '@breadcrumb-link-color': "@text-color-secondary",
    '@breadcrumb-link-color-hover': "@primary-5",
    '@breadcrumb-separator-color': "@text-color-secondary",
    '@breadcrumb-separator-margin': "0 @padding-xs",
    '@slider-handle-border-width': "2px",
    '@slider-handle-shadow': "0",
    '@slider-margin': "14px 6px 10px",
    '@slider-rail-background-color': "@background-color-base",
    '@slider-rail-background-color-hover': "#e1e1e1",
    '@slider-track-background-color': "@primary-3",
    '@slider-track-background-color-hover': "@primary-4",
    '@slider-handle-color': "@primary-3",
    '@slider-handle-color-hover': "@primary-4",
    '@slider-handle-color-focus': "tint(@primary-color, 20%)",
    '@slider-handle-color-focus-shadow': "fade(@primary-color, 20%)",
    '@slider-handle-color-tooltip-open': "@primary-color",
    '@slider-dot-border-color': "@border-color-split",
    '@slider-dot-border-color-active': "tint(@primary-color, 50%)",
    '@slider-disabled-color': "@disabled-color",
    '@slider-disabled-background-color': "@component-background",
    '@tree-title-height': "24px",
    '@tree-child-padding': "18px",
    '@tree-directory-selected-color': "#fff",
    '@tree-directory-selected-bg': "@primary-color",
    '@collapse-header-padding': "12px 16px",
    '@collapse-header-padding-extra': "40px",
    '@collapse-header-bg': "@background-color-light",
    '@collapse-content-padding': "@padding-md",
    '@collapse-content-bg': "@component-background",
    '@skeleton-color': "#f2f2f2",
    '@transfer-header-height': "40px",
    '@transfer-disabled-bg': "@disabled-bg",
    '@transfer-list-height': "200px",
    '@message-notice-content-padding': "10px 16px",
    '@wave-animation-width': "6px",
    '@alert-success-border-color': "~`colorPalette('@{success-color}', 3) `",
    '@alert-success-bg-color': "~`colorPalette('@{success-color}', 1) `",
    '@alert-success-icon-color': "@success-color",
    '@alert-info-border-color': "~`colorPalette('@{info-color}', 3) `",
    '@alert-info-bg-color': "~`colorPalette('@{info-color}', 1) `",
    '@alert-info-icon-color': "@info-color",
    '@alert-warning-border-color': "~`colorPalette('@{warning-color}', 3) `",
    '@alert-warning-bg-color': "~`colorPalette('@{warning-color}', 1) `",
    '@alert-warning-icon-color': "@warning-color",
    '@alert-error-border-color': "~`colorPalette('@{error-color}', 3) `",
    '@alert-error-bg-color': "~`colorPalette('@{error-color}', 1) `",
    '@alert-error-icon-color': "@error-color",
    '@list-header-background': "transparent",
    '@list-footer-background': "transparent",
    '@list-empty-text-padding': "@padding-md",
    '@list-item-padding': "@padding-sm 0",
    '@list-item-meta-margin-bottom': "@padding-md",
    '@list-item-meta-avatar-margin-right': "@padding-md",
    '@list-item-meta-title-margin-bottom': "@padding-sm",
    '@statistic-title-font-size': "@font-size-base",
    '@statistic-content-font-size': "24px",
    '@statistic-unit-font-size': "16px",
    '@statistic-font-family': "@font-family",
    '@drawer-header-padding': "16px 24px",
    '@drawer-body-padding': "24px"
}
export default lightTheme