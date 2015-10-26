var Manifesto;
(function (Manifesto) {
    var StringValue = (function () {
        function StringValue(value) {
            this.value = "";
            if (value) {
                this.value = value.toLowerCase();
            }
        }
        StringValue.prototype.toString = function () {
            return this.value;
        };
        return StringValue;
    })();
    Manifesto.StringValue = StringValue;
})(Manifesto || (Manifesto = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Manifesto;
(function (Manifesto) {
    var CanvasType = (function (_super) {
        __extends(CanvasType, _super);
        function CanvasType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        CanvasType.prototype.canvas = function () {
            return new CanvasType(CanvasType.CANVAS.toString());
        };
        CanvasType.CANVAS = new CanvasType("sc:canvas");
        return CanvasType;
    })(Manifesto.StringValue);
    Manifesto.CanvasType = CanvasType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ElementType = (function (_super) {
        __extends(ElementType, _super);
        function ElementType() {
            _super.apply(this, arguments);
        }
        // todo: Should IIIFIMAGE go here?
        // todo: use getters when ES3 target is no longer required.
        ElementType.prototype.document = function () {
            return new ElementType(ElementType.DOCUMENT.toString());
        };
        ElementType.prototype.movingimage = function () {
            return new ElementType(ElementType.MOVINGIMAGE.toString());
        };
        ElementType.prototype.sound = function () {
            return new ElementType(ElementType.SOUND.toString());
        };
        ElementType.DOCUMENT = new ElementType("foaf:document");
        ElementType.MOVINGIMAGE = new ElementType("dctypes:movingimage");
        ElementType.SOUND = new ElementType("dctypes:sound");
        return ElementType;
    })(Manifesto.StringValue);
    Manifesto.ElementType = ElementType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ManifestType = (function (_super) {
        __extends(ManifestType, _super);
        function ManifestType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ManifestType.prototype.empty = function () {
            return new ManifestType(ManifestType.EMPTY.toString());
        };
        ManifestType.prototype.folio = function () {
            return new ManifestType(ManifestType.FOLIO.toString());
        };
        ManifestType.prototype.monograph = function () {
            return new ManifestType(ManifestType.MONOGRAPH.toString());
        };
        ManifestType.EMPTY = new ManifestType("");
        ManifestType.FOLIO = new ManifestType("folio");
        ManifestType.MONOGRAPH = new ManifestType("monograph");
        return ManifestType;
    })(Manifesto.StringValue);
    Manifesto.ManifestType = ManifestType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var RenderingFormat = (function (_super) {
        __extends(RenderingFormat, _super);
        function RenderingFormat() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        RenderingFormat.prototype.pdf = function () {
            return new RenderingFormat(RenderingFormat.PDF.toString());
        };
        RenderingFormat.prototype.doc = function () {
            return new RenderingFormat(RenderingFormat.DOC.toString());
        };
        RenderingFormat.prototype.docx = function () {
            return new RenderingFormat(RenderingFormat.DOCX.toString());
        };
        RenderingFormat.PDF = new RenderingFormat("application/pdf");
        RenderingFormat.DOC = new RenderingFormat("application/msword");
        RenderingFormat.DOCX = new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        return RenderingFormat;
    })(Manifesto.StringValue);
    Manifesto.RenderingFormat = RenderingFormat;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ServiceProfile = (function (_super) {
        __extends(ServiceProfile, _super);
        function ServiceProfile() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ServiceProfile.prototype.autoComplete = function () {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        };
        ServiceProfile.prototype.clickThrough = function () {
            return new ServiceProfile(ServiceProfile.CLICKTHROUGH.toString());
        };
        ServiceProfile.prototype.iiifImageLevel1 = function () {
            return new ServiceProfile(ServiceProfile.IIIFIMAGELEVEL1.toString());
        };
        ServiceProfile.prototype.iiifImageLevel2 = function () {
            return new ServiceProfile(ServiceProfile.IIIFIMAGELEVEL2.toString());
        };
        ServiceProfile.prototype.ixif = function () {
            return new ServiceProfile(ServiceProfile.IXIF.toString());
        };
        ServiceProfile.prototype.login = function () {
            return new ServiceProfile(ServiceProfile.LOGIN.toString());
        };
        ServiceProfile.prototype.logout = function () {
            return new ServiceProfile(ServiceProfile.LOGOUT.toString());
        };
        ServiceProfile.prototype.otherManifestations = function () {
            return new ServiceProfile(ServiceProfile.OTHERMANIFESTATIONS.toString());
        };
        ServiceProfile.prototype.searchWithin = function () {
            return new ServiceProfile(ServiceProfile.SEARCHWITHIN.toString());
        };
        ServiceProfile.prototype.token = function () {
            return new ServiceProfile(ServiceProfile.TOKEN.toString());
        };
        ServiceProfile.AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        ServiceProfile.CLICKTHROUGH = new ServiceProfile("http://wellcomelibrary.org/ld/iiif-ext/0/accept-terms-click-through");
        ServiceProfile.IIIFIMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/2/level1.json");
        ServiceProfile.IIIFIMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/2/level2.json");
        ServiceProfile.IXIF = new ServiceProfile("http://wellcomelibrary.org/ld/ixif/0/alpha.json");
        ServiceProfile.LOGIN = new ServiceProfile("http://iiif.io/api/image/2/auth/login");
        ServiceProfile.LOGOUT = new ServiceProfile("http://iiif.io/api/image/2/auth/logout");
        ServiceProfile.OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        ServiceProfile.SEARCHWITHIN = new ServiceProfile("http://iiif.io/api/search/1/");
        ServiceProfile.TOKEN = new ServiceProfile("http://iiif.io/api/image/2/auth/token");
        return ServiceProfile;
    })(Manifesto.StringValue);
    Manifesto.ServiceProfile = ServiceProfile;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingDirection = (function (_super) {
        __extends(ViewingDirection, _super);
        function ViewingDirection() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ViewingDirection.prototype.leftToRight = function () {
            return new ViewingDirection(ViewingDirection.LEFTTORIGHT.toString());
        };
        ViewingDirection.prototype.rightToLeft = function () {
            return new ViewingDirection(ViewingDirection.RIGHTTOLEFT.toString());
        };
        ViewingDirection.prototype.topToBottom = function () {
            return new ViewingDirection(ViewingDirection.TOPTOBOTTOM.toString());
        };
        ViewingDirection.prototype.bottomToTop = function () {
            return new ViewingDirection(ViewingDirection.BOTTOMTOTOP.toString());
        };
        ViewingDirection.LEFTTORIGHT = new ViewingDirection("left-to-right");
        ViewingDirection.RIGHTTOLEFT = new ViewingDirection("right-to-left");
        ViewingDirection.TOPTOBOTTOM = new ViewingDirection("top-to-bottom");
        ViewingDirection.BOTTOMTOTOP = new ViewingDirection("bottom-to-top");
        return ViewingDirection;
    })(Manifesto.StringValue);
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingHint = (function (_super) {
        __extends(ViewingHint, _super);
        function ViewingHint() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ViewingHint.prototype.continuous = function () {
            return new ViewingHint(ViewingHint.CONTINUOUS.toString());
        };
        ViewingHint.prototype.empty = function () {
            return new ViewingHint(ViewingHint.EMPTY.toString());
        };
        ViewingHint.prototype.individuals = function () {
            return new ViewingHint(ViewingHint.INDIVIDUALS.toString());
        };
        ViewingHint.prototype.nonPaged = function () {
            return new ViewingHint(ViewingHint.NONPAGED.toString());
        };
        ViewingHint.prototype.paged = function () {
            return new ViewingHint(ViewingHint.PAGED.toString());
        };
        ViewingHint.prototype.top = function () {
            return new ViewingHint(ViewingHint.TOP.toString());
        };
        ViewingHint.CONTINUOUS = new ViewingHint("continuous");
        ViewingHint.EMPTY = new ViewingHint("");
        ViewingHint.INDIVIDUALS = new ViewingHint("individuals");
        ViewingHint.NONPAGED = new ViewingHint("non-paged");
        ViewingHint.PAGED = new ViewingHint("paged");
        ViewingHint.TOP = new ViewingHint("top");
        return ViewingHint;
    })(Manifesto.StringValue);
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var JSONLDResource = (function () {
        function JSONLDResource(jsonld) {
            this.__jsonld = jsonld;
            // store a reference to the parsed object in the jsonld for convenience.
            this.__jsonld.__parsed = this;
            this.context = this.getProperty('@context');
            this.id = this.getProperty('@id');
            this._label = this.getProperty('label');
        }
        JSONLDResource.prototype.getManifest = function () {
            return this.getProperty('__manifest');
        };
        JSONLDResource.prototype.getLabel = function () {
            // todo: why test if it's a digit?
            //var regExp = /\d/;
            //if (regExp.test(this._label)) {
            return this.getManifest().getLocalisedValue(this._label);
            //}
            //return null;
        };
        JSONLDResource.prototype.getProperty = function (name) {
            return this.__jsonld[name];
        };
        return JSONLDResource;
    })();
    Manifesto.JSONLDResource = JSONLDResource;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ManifestResource = (function (_super) {
        __extends(ManifestResource, _super);
        function ManifestResource() {
            _super.apply(this, arguments);
        }
        // todo: add getMetadata
        ManifestResource.prototype.getService = function (profile) {
            var m = this.getManifest();
            return m.getService(this, profile);
        };
        return ManifestResource;
    })(Manifesto.JSONLDResource);
    Manifesto.ManifestResource = ManifestResource;
})(Manifesto || (Manifesto = {}));
var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");
var Manifesto;
(function (Manifesto) {
    var Canvas = (function (_super) {
        __extends(Canvas, _super);
        function Canvas(jsonld) {
            _super.call(this, jsonld);
            this.ranges = [];
        }
        // todo: return all image services matching the IIIFIMAGELEVEL1/2 profile
        // https://github.com/UniversalViewer/universalviewer/issues/119
        //getImages(): IService[] {
        //
        //}
        // todo: use getImages instead. the client must decide which to use.
        // each service has a getInfoUri method.
        Canvas.prototype.getInfoUri = function () {
            var infoUri;
            if (this.__jsonld.resources) {
                infoUri = this.__jsonld.resources[0].resource.service['@id'];
            }
            else if (this.__jsonld.images && this.__jsonld.images[0].resource.service) {
                infoUri = this.__jsonld.images[0].resource.service['@id'];
            }
            if (!_endsWith(infoUri, '/')) {
                infoUri += '/';
            }
            infoUri += 'info.json';
            return infoUri;
        };
        Canvas.prototype.getRange = function () {
            // get the deepest Range that this Canvas belongs to.
            return _last(this.ranges);
        };
        // todo: Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        Canvas.prototype.getThumbUri = function (width, height) {
            var uri;
            //if(this.__jsonld.thumbnail){
            //    return this.__jsonld.thumbnail;
            //} else if (this.__jsonld.resources){
            if (this.__jsonld.resources) {
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.__jsonld.resources[0].resource.service['@id'];
            }
            else if (this.__jsonld.images && this.__jsonld.images[0].resource.service) {
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.__jsonld.images[0].resource.service['@id'];
            }
            else {
                return null;
            }
            if (!_endsWith(uri, '/')) {
                uri += '/';
            }
            // todo: allow region, rotation, quality, and format as parameters?
            var tile = 'full/' + width + ',' + height + '/0/default.jpg';
            return uri + tile;
        };
        Canvas.prototype.getType = function () {
            return new Manifesto.CanvasType(this.getProperty('@type').toLowerCase());
        };
        Canvas.prototype.getWidth = function () {
            return this.getProperty('width');
        };
        Canvas.prototype.getHeight = function () {
            return this.getProperty('height');
        };
        return Canvas;
    })(Manifesto.ManifestResource);
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Element = (function (_super) {
        __extends(Element, _super);
        function Element(jsonld) {
            _super.call(this, jsonld);
        }
        Element.prototype.getType = function () {
            return new Manifesto.ElementType(this.getProperty('@type'));
        };
        return Element;
    })(Manifesto.ManifestResource);
    Manifesto.Element = Element;
})(Manifesto || (Manifesto = {}));
var _assign = require("lodash.assign");
var _isArray = require("lodash.isarray");
var _map = require("lodash.map");
var Manifesto;
(function (Manifesto) {
    var Manifest = (function (_super) {
        __extends(Manifest, _super);
        function Manifest(jsonld, options) {
            _super.call(this, jsonld);
            this.sequences = [];
            jsonld.__manifest = this;
            var defaultOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                pessimisticAccessControl: false
            };
            this.options = _assign(defaultOptions, options);
        }
        Manifest.prototype.getAttribution = function () {
            return this.getLocalisedValue(this.getProperty('attribution'));
        };
        Manifest.prototype.getLocalisedValue = function (resource, locale) {
            // if the resource is not an array of translations, return the string.
            if (!_isArray(resource)) {
                return resource;
            }
            if (!locale)
                locale = this.options.locale;
            // test for exact match
            for (var i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];
                if (locale === language) {
                    return value['@value'];
                }
            }
            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));
            for (var i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];
                if (language === match) {
                    return value['@value'];
                }
            }
            return null;
        };
        Manifest.prototype.getLogo = function () {
            return this.getProperty('logo');
        };
        Manifest.prototype.getLicense = function () {
            return this.getLocalisedValue(this.getProperty('license'));
        };
        // todo: remove includeRootProperties
        // todo: any resource may have metadata, add resource param
        Manifest.prototype.getMetadata = function (includeRootProperties) {
            var metadata = this.getProperty('metadata');
            // get localised value for each metadata item.
            for (var i = 0; i < metadata.length; i++) {
                var item = metadata[i];
                item.label = this.getLocalisedValue(item.label);
                item.value = this.getLocalisedValue(item.value);
            }
            if (metadata && includeRootProperties) {
                if (this.getProperty('description')) {
                    metadata.push({
                        "label": "description",
                        "value": this.getLocalisedValue(this.getProperty('description'))
                    });
                }
                if (this.getProperty('attribution')) {
                    metadata.push({
                        "label": "attribution",
                        "value": this.getLocalisedValue(this.getProperty('attribution'))
                    });
                }
                if (this.getProperty('license')) {
                    metadata.push({
                        "label": "license",
                        "value": this.getLocalisedValue(this.getProperty('license'))
                    });
                }
                if (this.getProperty('logo')) {
                    metadata.push({
                        "label": "logo",
                        "value": '<img src="' + this.getProperty('logo') + '"/>' });
                }
            }
            return metadata;
        };
        // todo: use jmespath to flatten tree?
        // https://github.com/jmespath/jmespath.js/issues/6
        // using r.__parsed in the meantime
        Manifest.prototype.getRanges = function () {
            var ranges = [];
            var structures = this.getProperty('structures');
            if (!structures)
                return ranges;
            for (var i = 0; i < structures.length; i++) {
                var r = structures[i];
                ranges.push(r.__parsed);
            }
            return ranges;
        };
        Manifest.prototype.getRangeById = function (id) {
            var ranges = this.getRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.id === id) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRangeByPath = function (path) {
            var ranges = this.getRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRendering = function (resource, format) {
            var renderings = this.getRenderings(resource);
            // normalise format to string
            if (typeof format !== 'string') {
                format = format.toString();
            }
            for (var i = 0; i < renderings.length; i++) {
                var rendering = renderings[i];
                if (rendering.getFormat().toString() === format) {
                    return rendering;
                }
            }
            return null;
        };
        Manifest.prototype.getRenderings = function (resource) {
            var rendering;
            // if passing a parsed object, use the __jsonld.rendering property,
            // otherwise look for a rendering property
            if (resource.__jsonld) {
                rendering = resource.__jsonld.rendering;
            }
            else {
                rendering = resource.rendering;
            }
            var parsed = [];
            if (!rendering) {
                return parsed;
            }
            // normalise to array
            if (!_isArray(rendering)) {
                rendering = [rendering];
            }
            for (var i = 0; i < rendering.length; i++) {
                var r = rendering[i];
                r.__manifest = this;
                parsed.push(new Manifesto.Rendering(r));
            }
            return parsed;
        };
        Manifest.prototype.getSeeAlso = function () {
            return this.getLocalisedValue(this.getProperty('seeAlso'));
        };
        Manifest.prototype.getService = function (resource, profile) {
            var services = this.getServices(resource);
            // normalise profile to string
            if (typeof profile !== 'string') {
                profile = profile.toString();
            }
            for (var i = 0; i < services.length; i++) {
                var service = services[i];
                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }
            return null;
        };
        Manifest.prototype.getServices = function (resource) {
            var service;
            // if passing a parsed object, use the __jsonld.service property,
            // otherwise look for a service property
            if (resource.__jsonld) {
                service = resource.__jsonld.service;
            }
            else {
                service = resource.service;
            }
            var parsed = [];
            if (!service)
                return parsed;
            // normalise to array
            if (!_isArray(service)) {
                service = [service];
            }
            for (var i = 0; i < service.length; i++) {
                var s = service[i];
                s.__manifest = this;
                parsed.push(new Manifesto.Service(s));
            }
            return parsed;
        };
        Manifest.prototype.getSequenceByIndex = function (sequenceIndex) {
            return this.sequences[sequenceIndex];
        };
        Manifest.prototype.getTitle = function () {
            return this.getLocalisedValue(this.getProperty('label'));
        };
        Manifest.prototype.getTotalSequences = function () {
            return this.sequences.length;
        };
        Manifest.prototype.getTree = function () {
            this.treeRoot = new Manifesto.TreeNode('root');
            this.treeRoot.label = 'root';
            if (!this.rootRange)
                return this.treeRoot;
            this.treeRoot.data = this.rootRange;
            this.treeRoot.data.type = 'manifest';
            this.rootRange.treeNode = this.treeRoot;
            if (this.rootRange.ranges) {
                for (var i = 0; i < this.rootRange.ranges.length; i++) {
                    var range = this.rootRange.ranges[i];
                    var node = new Manifesto.TreeNode();
                    this.treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }
            return this.treeRoot;
        };
        Manifest.prototype._parseTreeNode = function (node, range) {
            node.label = range.getLabel();
            node.data = range;
            node.data.type = 'range';
            range.treeNode = node;
            if (range.ranges) {
                for (var i = 0; i < range.ranges.length; i++) {
                    var childRange = range.ranges[i];
                    var childNode = new Manifesto.TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }
            }
        };
        Manifest.prototype.getType = function () {
            return new Manifesto.ManifestType(this.getProperty('exp:manifestType'));
        };
        Manifest.prototype.isMultiSequence = function () {
            return this.getTotalSequences() > 1;
        };
        return Manifest;
    })(Manifesto.JSONLDResource);
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Range = (function (_super) {
        __extends(Range, _super);
        function Range(jsonld) {
            _super.call(this, jsonld);
            this.canvases = [];
            this.ranges = [];
        }
        //getLabel(): string {
        //    var regExp = /\d/;
        //
        //    if (regExp.test(this.__jsonld.label)) {
        //        return this.manifest.getLocalisedValue(this.__jsonld.label);
        //    }
        //
        //    return null;
        //}
        Range.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return null;
        };
        Range.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return null;
        };
        return Range;
    })(Manifesto.JSONLDResource);
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Rendering = (function (_super) {
        __extends(Rendering, _super);
        function Rendering(jsonld) {
            _super.call(this, jsonld);
        }
        Rendering.prototype.getFormat = function () {
            return new Manifesto.RenderingFormat(this.getProperty('format'));
        };
        return Rendering;
    })(Manifesto.JSONLDResource);
    Manifesto.Rendering = Rendering;
})(Manifesto || (Manifesto = {}));
var _last = require("lodash.last");
var Manifesto;
(function (Manifesto) {
    var Sequence = (function (_super) {
        __extends(Sequence, _super);
        function Sequence(jsonld) {
            _super.call(this, jsonld);
            this.canvases = [];
        }
        Sequence.prototype.getCanvasById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return canvas;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasByIndex = function (canvasIndex) {
            return this.canvases[canvasIndex];
        };
        Sequence.prototype.getCanvasIndexById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return i;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasIndexByLabel = function (label, foliated) {
            label = label.trim();
            if (!isNaN(label)) {
                label = parseInt(label, 10).toString(); // trim any preceding zeros.
                if (foliated)
                    label += 'r'; // default to recto
            }
            var doublePageRegExp = /(\d*)\D+(\d*)/;
            var match, regExp, regStr, labelPart1, labelPart2;
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                // check if there's a literal match
                if (canvas.getLabel() === label) {
                    return i;
                }
                // check if there's a match for double-page spreads e.g. 100-101, 100_101, 100 101
                match = doublePageRegExp.exec(label);
                if (!match)
                    continue;
                labelPart1 = match[1];
                labelPart2 = match[2];
                if (!labelPart2)
                    continue;
                regStr = "^" + labelPart1 + "\\D+" + labelPart2 + "$";
                regExp = new RegExp(regStr);
                if (regExp.test(canvas.getLabel())) {
                    return i;
                }
            }
            return -1;
        };
        Sequence.prototype.getLastCanvasLabel = function () {
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas = this.getCanvasByIndex(i);
                return canvas.getLabel();
            }
            return this.getManifest().options.defaultLabel;
        };
        Sequence.prototype.getLastPageIndex = function () {
            return this.getTotalCanvases() - 1;
        };
        Sequence.prototype.getNextPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    index = indices[0] + 1;
                }
                else {
                    index = _last(indices) + 1;
                }
            }
            else {
                index = canvasIndex + 1;
            }
            if (index > this.getLastPageIndex()) {
                return -1;
            }
            return index;
        };
        Sequence.prototype.getPagedIndices = function (canvasIndex, pagingEnabled) {
            var indices = [];
            if (!pagingEnabled) {
                indices.push(canvasIndex);
            }
            else {
                if (this.isFirstCanvas(canvasIndex) || this.isLastCanvas(canvasIndex)) {
                    indices = [canvasIndex];
                }
                else if (canvasIndex % 2) {
                    indices = [canvasIndex, canvasIndex + 1];
                }
                else {
                    indices = [canvasIndex - 1, canvasIndex];
                }
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    indices = indices.reverse();
                }
            }
            return indices;
        };
        Sequence.prototype.getPrevPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    index = _last(indices) - 1;
                }
                else {
                    index = indices[0] - 1;
                }
            }
            else {
                index = canvasIndex - 1;
            }
            return index;
        };
        Sequence.prototype.getStartCanvasIndex = function () {
            var startCanvas = this.getStartCanvas();
            if (startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (var i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);
                    if (canvas.id === startCanvas)
                        return i;
                }
            }
            // default to first canvas.
            return 0;
        };
        Sequence.prototype.getThumbs = function (width, height) {
            var thumbs = [];
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                //if (!_isNumber(height)) {
                var heightRatio = canvas.getHeight() / canvas.getWidth();
                if (heightRatio) {
                    height = Math.floor(width * heightRatio);
                }
                //}
                var uri = canvas.getThumbUri(width, height);
                var label = canvas.getLabel();
                thumbs.push(new Manifesto.Thumb(i, uri, label, width, height, true));
            }
            return thumbs;
        };
        Sequence.prototype.getStartCanvas = function () {
            return this.getProperty('startCanvas');
        };
        Sequence.prototype.getTotalCanvases = function () {
            return this.canvases.length;
        };
        Sequence.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        };
        Sequence.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return Manifesto.ViewingHint.EMPTY;
        };
        Sequence.prototype.isCanvasIndexOutOfRange = function (canvasIndex) {
            return canvasIndex > this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isFirstCanvas = function (canvasIndex) {
            return canvasIndex === 0;
        };
        Sequence.prototype.isLastCanvas = function (canvasIndex) {
            return canvasIndex === this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isMultiCanvas = function () {
            return this.getTotalCanvases() > 1;
        };
        Sequence.prototype.isPagingEnabled = function () {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        };
        // checks if the number of canvases is even - therefore has a front and back cover
        Sequence.prototype.isTotalCanvasesEven = function () {
            return this.getTotalCanvases() % 2 === 0;
        };
        return Sequence;
    })(Manifesto.ManifestResource);
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));
var jmespath = require('jmespath');
var Manifesto;
(function (Manifesto) {
    var Deserialiser = (function () {
        function Deserialiser() {
        }
        Deserialiser.parse = function (manifest, options) {
            var m = JSON.parse(manifest);
            this.manifest = new Manifesto.Manifest(m, options);
            this.parseSequences();
            if (this.manifest.__jsonld.structures && this.manifest.__jsonld.structures.length) {
                this.parseRanges(JsonUtils.getRootRange(this.manifest.__jsonld), '');
            }
            return this.manifest;
        };
        Deserialiser.parseSequences = function () {
            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            var children = this.manifest.__jsonld.mediaSequences || this.manifest.__jsonld.sequences;
            for (var i = 0; i < children.length; i++) {
                var s = children[i];
                s.__manifest = this.manifest;
                var sequence = new Manifesto.Sequence(s);
                sequence.canvases = this.parseCanvases(s);
                this.manifest.sequences.push(sequence);
            }
        };
        Deserialiser.parseCanvases = function (sequence) {
            var canvases = [];
            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            var children = sequence.elements || sequence.canvases;
            for (var i = 0; i < children.length; i++) {
                var c = children[i];
                c.__manifest = this.manifest;
                var canvas = new Manifesto.Canvas(c);
                canvases.push(canvas);
            }
            return canvases;
        };
        Deserialiser.parseRanges = function (r, path, parentRange) {
            r.__manifest = this.manifest;
            var range = new Manifesto.Range(r);
            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange) {
                this.manifest.rootRange = range;
            }
            else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }
            range.path = path;
            if (r.canvases) {
                // create two-way relationship
                for (var i = 0; i < r.canvases.length; i++) {
                    var canvas = this.getCanvasById(r.canvases[i]);
                    canvas.ranges.push(range);
                    range.canvases.push(canvas);
                }
            }
            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this.parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }
        };
        Deserialiser.getCanvasById = function (id) {
            for (var i = 0; i < this.manifest.sequences.length; i++) {
                var sequence = this.manifest.sequences[i];
                for (var j = 0; j < sequence.canvases.length; j++) {
                    var canvas = sequence.canvases[j];
                    if (canvas.id === id) {
                        return canvas;
                    }
                }
            }
            return null;
        };
        return Deserialiser;
    })();
    Manifesto.Deserialiser = Deserialiser;
    var Serialiser = (function () {
        function Serialiser() {
        }
        Serialiser.serialise = function (manifest) {
            // todo
            return "";
        };
        return Serialiser;
    })();
    Manifesto.Serialiser = Serialiser;
    var JsonUtils = (function () {
        function JsonUtils() {
        }
        JsonUtils.getCanvasById = function (manifest, id) {
            var result = jmespath.search(manifest, "sequences[].canvases[?\"@id\"=='" + id + "'][]");
            if (result.length)
                return result[0];
            return null;
        };
        JsonUtils.getRangeById = function (manifest, id) {
            var result = jmespath.search(manifest, "structures[?\"@id\"=='" + id + "'][]");
            if (result.length)
                return result[0];
            return null;
        };
        JsonUtils.getRootRange = function (manifest) {
            var result = jmespath.search(manifest, "structures[?viewingHint=='top'][]");
            if (result.length)
                return result[0];
            var rootRange = {};
            rootRange.ranges = manifest.structures;
            return rootRange;
        };
        return JsonUtils;
    })();
})(Manifesto || (Manifesto = {}));
var _endsWith = require("lodash.endswith");
var Manifesto;
(function (Manifesto) {
    var Service = (function (_super) {
        __extends(Service, _super);
        function Service(resource) {
            _super.call(this, resource);
        }
        Service.prototype.getProfile = function () {
            return new Manifesto.ServiceProfile(this.getProperty('profile'));
        };
        Service.prototype.getDescription = function () {
            return this.getManifest().getLocalisedValue(this.getProperty('description'));
        };
        Service.prototype.getInfoUri = function () {
            var infoUri = this.id;
            if (!_endsWith(infoUri, '/')) {
                infoUri += '/';
            }
            infoUri += 'info.json';
            return infoUri;
        };
        return Service;
    })(Manifesto.JSONLDResource);
    Manifesto.Service = Service;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Thumb = (function () {
        function Thumb(index, uri, label, width, height, visible) {
            this.index = index;
            this.uri = uri;
            this.label = label;
            this.width = width;
            this.height = height;
            this.visible = visible;
        }
        return Thumb;
    })();
    Manifesto.Thumb = Thumb;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var TreeNode = (function () {
        function TreeNode(label, data) {
            this.label = label;
            this.data = data;
            this.nodes = [];
            if (!data)
                this.data = {};
        }
        TreeNode.prototype.addNode = function (node) {
            this.nodes.push(node);
            node.parentNode = this;
        };
        return TreeNode;
    })();
    Manifesto.TreeNode = TreeNode;
})(Manifesto || (Manifesto = {}));
var http = require("http");
var url = require("url");
var Manifesto;
(function (Manifesto) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.loadManifest = function (uri) {
            return new Promise(function (resolve, reject) {
                var u = url.parse(uri);
                var fetch = http.request({
                    host: u.hostname,
                    port: u.port || 80,
                    path: u.pathname,
                    method: "GET",
                    withCredentials: false
                }, function (res) {
                    var result = "";
                    res.on('data', function (chunk) {
                        result += chunk;
                    });
                    res.on('end', function () {
                        resolve(result);
                    });
                });
                fetch.end();
            });
        };
        Utils.loadExternalResource = function (resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise(function (resolve, reject) {
                if (options && options.pessimisticAccessControl) {
                    // pessimistic: access control cookies may have been deleted.
                    // always request the access token for every access controlled info.json request
                    // returned access tokens are not stored, therefore the login window flashes for every request.
                    resource.getData().then(function () {
                        if (resource.isAccessControlled()) {
                            // if the resource has a click through service, use that.
                            if (resource.clickThroughService) {
                                resolve(clickThrough(resource));
                            }
                            else {
                                login(resource.loginService.id).then(function () {
                                    getAccessToken(resource.tokenService.id).then(function (token) {
                                        resource.getData(token).then(function () {
                                            resolve(handleResourceResponse(resource));
                                        });
                                    });
                                });
                            }
                        }
                        else {
                            // this info.json isn't access controlled, therefore no need to request an access token.
                            resolve(resource);
                        }
                    });
                }
                else {
                    // optimistic: access control cookies may not have been deleted.
                    // store access tokens to avoid login window flashes.
                    // if cookies are deleted a page refresh is required.
                    // try loading the resource using an access token that matches the info.json domain.
                    // if an access token is found, request the resource using it regardless of whether it is access controlled.
                    getStoredAccessToken(resource.dataUri).then(function (storedAccessToken) {
                        if (storedAccessToken) {
                            // try using the stored access token
                            resource.getData(storedAccessToken).then(function () {
                                // if the info.json loaded using the stored access token
                                if (resource.status === HTTPStatusCode.OK) {
                                    resolve(handleResourceResponse(resource));
                                }
                                else {
                                    // otherwise, load the resource data to determine the correct access control services.
                                    // if access controlled, do login.
                                    Utils.authorize(resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                        resolve(handleResourceResponse(resource));
                                    });
                                }
                            });
                        }
                        else {
                            Utils.authorize(resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                resolve(handleResourceResponse(resource));
                            });
                        }
                    });
                }
            });
        };
        Utils.loadExternalResources = function (resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise(function (resolve) {
                var promises = _map(resources, function (resource) {
                    return Utils.loadExternalResource(resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
                });
                Promise.all(promises)
                    .then(function () {
                    resolve(resources);
                });
            });
        };
        Utils.authorize = function (resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken) {
            return new Promise(function (resolve, reject) {
                resource.getData().then(function () {
                    if (resource.isAccessControlled()) {
                        getStoredAccessToken(resource.tokenService.id).then(function (storedAccessToken) {
                            if (storedAccessToken) {
                                // try using the stored access token
                                resource.getData(storedAccessToken).then(function () {
                                    resolve(resource);
                                });
                            }
                            else {
                                if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY && !resource.isResponseHandled) {
                                    // if the resource was redirected to a degraded version
                                    // and the response hasn't been handled yet.
                                    // if the client wishes to trigger a login, set resource.isResponseHandled to true
                                    // and call loadExternalResources() again.
                                    resolve(resource);
                                }
                                else if (resource.clickThroughService) {
                                    // if the resource has a click through service, use that.
                                    clickThrough(resource);
                                }
                                else {
                                    // get an access token
                                    login(resource.loginService.id).then(function () {
                                        getAccessToken(resource.tokenService.id).then(function (accessToken) {
                                            storeAccessToken(resource, accessToken).then(function () {
                                                resource.getData(accessToken).then(function () {
                                                    resolve(resource);
                                                });
                                            });
                                        });
                                    });
                                }
                            }
                        });
                    }
                    else {
                        // this info.json isn't access controlled, therefore there's no need to request an access token
                        resolve(resource);
                    }
                });
            });
        };
        return Utils;
    })();
    Manifesto.Utils = Utils;
})(Manifesto || (Manifesto = {}));
;
module.exports = {
    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    ManifestType: new Manifesto.ManifestType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),
    loadManifest: function (uri) {
        return Manifesto.Utils.loadManifest(uri);
    },
    loadExternalResources: function (resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
        return Manifesto.Utils.loadExternalResources(resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
    },
    create: function (manifest, options) {
        return Manifesto.Deserialiser.parse(manifest, options);
    }
};
/// <reference path="./StringValue.ts" />
/// <reference path="./CanvasType.ts" />
/// <reference path="./ElementType.ts" />
/// <reference path="./ManifestType.ts" />
/// <reference path="./RenderingFormat.ts" />
/// <reference path="./ServiceProfile.ts" />
/// <reference path="./ViewingDirection.ts" />
/// <reference path="./ViewingHint.ts" />
/// <reference path="./JSONLDResource.ts" />
/// <reference path="./ManifestResource.ts" />
/// <reference path="./Canvas.ts" />
/// <reference path="./Element.ts" />
/// <reference path="./Manifest.ts" />
/// <reference path="./Range.ts" />
/// <reference path="./Rendering.ts" />
/// <reference path="./Sequence.ts" />
/// <reference path="./Serialisation.ts" />
/// <reference path="./Service.ts" />
/// <reference path="./Thumb.ts" />
/// <reference path="./TreeNode.ts" />
/// <reference path="./Utils.ts" />
/// <reference path="./Manifesto.ts" /> 
