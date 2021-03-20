(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reward-about'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"reward-about__select button\" onclick=\"openPledgeModal("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":73},"end":{"line":23,"column":79}}}) : helper)))
    + ")\">\r\n      Select Reward\r\n    </button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"reward-about__select button button--disabled\">\r\n      Out of Stock\r\n    </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"reward-about__inner\">\r\n  <div class=\"reward-about__header\">\r\n    <h2 class=\"reward-about__title\">\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":15}}}) : helper)))
    + "\r\n    </h2>\r\n    <p class=\"reward-about__pledge\">\r\n      Pledge $"
    + alias4(((helper = (helper = lookupProperty(helpers,"pledge") || (depth0 != null ? lookupProperty(depth0,"pledge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pledge","hash":{},"data":data,"loc":{"start":{"line":7,"column":14},"end":{"line":7,"column":24}}}) : helper)))
    + " or more\r\n    </p>\r\n  </div>\r\n  <p class=\"reward-about__desc\">\r\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":12}}}) : helper)))
    + "\r\n  </p>\r\n  <div class=\"reward-about__footer\">\r\n    <div class=\"reward-about__counter\">\r\n      <h1 class=\"reward-about__count\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":17}}}) : helper)))
    + "\r\n      </h1>\r\n      <span class=\"reward-about__count-text\">\r\n        left\r\n      </span>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"count") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});
templates['reward-selection'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <p class=\"reward-selection__pledge\">\r\n          Pledge $"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pledge") || (depth0 != null ? lookupProperty(depth0,"pledge") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pledge","hash":{},"data":data,"loc":{"start":{"line":12,"column":18},"end":{"line":12,"column":28}}}) : helper)))
    + " or more\r\n        </p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <h1 class=\"reward-selection__count\">\r\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"count","hash":{},"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":23,"column":17}}}) : helper)))
    + "\r\n      </h1>\r\n      <span class=\"reward-selection__count-text\">\r\n        left\r\n      </span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " button--disabled ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"reward-selection__inner\">\r\n  <div class=\"reward-selection__info\">\r\n    <div class=\"reward-selection__top\">\r\n      <input id=\"reward-selection"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":39}}}) : helper)))
    + "\" class=\"radio reward-selection__radio\" type=\"radio\" name=\"pledge\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":113},"end":{"line":4,"column":119}}}) : helper)))
    + "\"\r\n        "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"count") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":46}}})) != null ? stack1 : "")
    + " />\r\n      <div class=\"reward-selection__header\">\r\n        <label class=\"reward-selection__title\" for=\"reward-selection"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":68},"end":{"line":7,"column":74}}}) : helper)))
    + "\">\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":10},"end":{"line":8,"column":19}}}) : helper)))
    + "\r\n        </label>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showCount") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n    <p class=\"reward-selection__desc\">\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":14}}}) : helper)))
    + "\r\n    </p>\r\n    <div class=\"reward-selection__counter\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showCount") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":28,"column":13}}})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n\r\n  <div class=\"reward-selection__divider js-reward-selection__divider"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":32,"column":68},"end":{"line":32,"column":74}}}) : helper)))
    + "\"></div>\r\n\r\n  <div class=\"reward-selection__controls js-reward-selection__controls"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":34,"column":70},"end":{"line":34,"column":76}}}) : helper)))
    + "\">\r\n    <p class=\"reward-selection__enter\">\r\n      Enter your pledge\r\n    </p>\r\n    <div class=\"pledge-input reward-selection__pledge-input\">\r\n      <span class=\"pledge-input__symbol\">\r\n        $\r\n      </span>\r\n      <input class=\"pledge-input__input js-pledge-input__input"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":42,"column":62},"end":{"line":42,"column":68}}}) : helper)))
    + "\" type=\"number\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"pledge") || (depth0 != null ? lookupProperty(depth0,"pledge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pledge","hash":{},"data":data,"loc":{"start":{"line":42,"column":91},"end":{"line":42,"column":101}}}) : helper)))
    + "\" min=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"pledge") || (depth0 != null ? lookupProperty(depth0,"pledge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pledge","hash":{},"data":data,"loc":{"start":{"line":42,"column":108},"end":{"line":42,"column":118}}}) : helper)))
    + "\"\r\n        "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"count") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":43,"column":46}}})) != null ? stack1 : "")
    + " />\r\n    </div>\r\n    <button\r\n      class=\"button "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"count") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":20},"end":{"line":46,"column":66}}})) != null ? stack1 : "")
    + " reward-selection__button js-reward-selection__button"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":46,"column":119},"end":{"line":46,"column":125}}}) : helper)))
    + "\"\r\n      value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":47,"column":13},"end":{"line":47,"column":19}}}) : helper)))
    + "\"\">\r\n      Continue\r\n    </button>\r\n  </div>\r\n</div>";
},"useData":true});
templates['value-tracker'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"value-tracker__value\">\r\n  "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":11}}}) : helper)))
    + "\r\n</h1>\r\n<p class=\"value-tracker__text\">\r\n  "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":10}}}) : helper)))
    + "\r\n</p>";
},"useData":true});
})();