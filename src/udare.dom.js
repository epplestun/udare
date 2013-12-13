udare.dom = (function(utils, log, undefined) {
  log.info('udare.dom');

  var getNodeList = function(elem) {
    var l = new Array(elem), c = 1, ret = [];
    //var l = [].push(elem), c = 1, ret = [];
    for(var r = 0; r < c; r++) { 
      for(var z = 0; z < l[r].childNodes.length; z++) {
        ret.push(l[r].childNodes[z]);

        if(l[r].childNodes[z].childNodes[0]) {
          l.push(l[r].childNodes[z]);
          c++;
        }         
      }
    }

    return ret;
  };

  var DOM = function(container) {
    this.container = container;
    this.formElements = {};
    this.activeElement = document.activeElement;
  };
  DOM.prototype.listener = function(elements, events, scopes) {
    for(var elementIndex in elements) {
      var element = elements[elementIndex];

      if(element && element.getAttribute) {
        var model = element.getAttribute('data-model');

        if(model) {
          var modelParts = model.split('.');
          var modelController = modelParts[0];
          var modelName = modelParts[1];

          if(scopes[modelController][modelName]) {
            element.value = scopes[modelController][modelName];
          }

          for(var eventIndex in events) { 
            var evName = events[eventIndex];
            if(evName) {

              element.addEventListener(evName, function(s, c, n, e) {
                var input = e.target;
                this.activeElement = input;

                var value = input.value ? input.value : input.textContent;
                s[c][n] = value;
              }.bind(this, scopes, modelController, modelName));
            }
          }
        }
      }
    }
  };
  DOM.prototype.setHTML = function(html) {
    this.container.innerHTML = html;

    return this;
  };
  DOM.prototype.getHTML = function() {
    return this.container.innerHTML;
  };
  DOM.prototype.saveFormElementsStates = function() {
    this.formElements = {};
    var formElementsTypesAndAttributes = {
      //'input' : ['accept', 'accesskey', 'align', 'alt', 'checked', 'disabled', 'maxlength', 'name', 'readonly', 'size', 'src', 'tabindex', 'type', 'usemap', 'value'],
        /*
        'text' : ['']
        'button' : [], 
        'checkbox' : [],
        'file' : [],
        'hidden' : [],
        'image' : [], 
        'password' : [],
        'radio' : [], 
        'reset' : [],
        'submit' : []
        */
      //'textarea': ['accesskey', 'cols', 'disabled', 'name', 'readonly', 'rows', 'tabindex', 'value'],
      //'select': ['accesskey', 'disabled', 'multiple', 'name', 'size', 'tabindex'],
      //'option': ['disabled', 'label', 'selected', 'value']

      'input' : ['checked', 'disabled', 'maxlength', 'name', 'readonly', 'tabindex', 'type', 'value'],
      'textarea': ['accesskey', 'cols', 'disabled', 'name', 'readonly', 'rows', 'tabindex', 'value'],
      'select': ['accesskey', 'disabled', 'multiple', 'name', 'size', 'tabindex'],
      'option': ['disabled', 'selected', 'value']
    };
    var formElements = this.container.querySelectorAll(Object.keys(formElementsTypesAndAttributes).join(','));
    
    for(var i = 0, l = formElements.length; i < l; i++) {
      var formElement = formElements[i];
      var tagName = formElement.tagName.toLowerCase();
      var formElementState = {};

      if(tagName === 'input' || tagName === 'textarea' || tagName === 'select' || tagName === 'option') {
        for(var attrIndex in formElementsTypesAndAttributes[tagName]) {
          var attr = formElementsTypesAndAttributes[tagName][attrIndex];
          formElementState[attr] = formElement[attr]; // file value change
        }

        var formElementId = formElement.offsetTop + '-' + formElement.offsetLeft;

        this.formElements[formElementId] = {
          element: formElement,
          state: formElementState
        };
      }
    }

    return this;
  };
  DOM.prototype.loadFormElementsStates = function() {
    var formElements = this.container.querySelectorAll('input,textarea,select,option');

    for(var id in formElements) {
      var element = formElements[id];
      var elementId = element.offsetTop + '-' + element.offsetLeft;

      if(Object.keys(this.formElements).indexOf(elementId) > -1) {
        var state = this.formElements[elementId].state;
        for(var attr in state) {
          element[attr] = state[attr];
        }
      }
    }

    return this;
  };
  DOM.prototype.inputs = function(scopes) {
    this.listener(
      document.getElementsByTagName('input'), 
      ['keypress', 'keyup', 'keydown', 'change'],
      scopes
    );

    return this;
  };
  DOM.prototype.textareas = function(scopes) {
    this.listener(
      document.getElementsByTagName('textarea'), 
      ['keypress', 'keyup', 'keydown', 'change'], 
      scopes
    );

    return this;
  };
  DOM.prototype.setActiveElement = function() {    
    var nodeList = getNodeList(this.container);

    for(var key in nodeList) {
      var node = nodeList[key];

      if(node.outerHTML === this.activeElement.outerHTML) {
        if(node.setSelectionRange) {
          node.focus();
          var l = node.value.length * 2;
          node.setSelectionRange(l, l);
        }
      }
    };

    return this;
  };

  return function(container) {
    return new DOM(container);
  };
})(udare.utils, udare.log);