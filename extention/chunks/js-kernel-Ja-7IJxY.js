(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function d(n){return typeof n!="object"||n==null||!("id"in n)||typeof n.id!="string"||!("type"in n)?!1:n.type==="js-kernel:cancel"||n.type==="js-kernel:reset"?!0:n.type==="js-kernel:execute"&&"script"in n&&typeof n.script=="string"}function l(n){return typeof n=="object"&&n!=null&&"id"in n&&typeof n.id=="string"&&"ok"in n&&typeof n.ok=="boolean"}function u(n){return n instanceof Error?{message:n.message,name:n.name,stack:n.stack}:{message:typeof n=="string"?n:"JavaScript execution failed",name:"Error"}}var c=`(function() {
	var It = Object.defineProperty, l = (e, t) => {
		let a = {};
		for (var r in e) It(a, r, {
			get: e[r],
			enumerable: !0
		});
		return t || It(a, Symbol.toStringTag, { value: "Module" }), a;
	};
	const Oc = (e) => {
		if (e === null) return null;
		if (typeof e == "string" || typeof e == "boolean") return e;
		if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
		if (e instanceof String || e instanceof Boolean) return e.valueOf();
		if (e instanceof Number) {
			const t = e.valueOf();
			return Number.isFinite(t) ? t : void 0;
		}
	}, Bc = (e) => typeof e == "number" && Number.isInteger(e) && e > 0, Pt = (e, t) => {
		if (!Bc(t)) return e;
		const a = t;
		if (e.length <= a) return e;
		const r = e.length - a;
		return \`\${e.slice(0, a)}[truncated \${r} chars]\`;
	}, jc = (e, t) => {
		switch (e.type) {
			case "function": return e;
			case "error":
			case "object": return {
				...e,
				value: Pt(e.value, t)
			};
			case "value": return typeof e.value != "string" ? e : {
				...e,
				value: Pt(e.value, t)
			};
		}
	}, Lc = async (e, t, a) => {
		const { displayImage: r, displayValue: s } = e;
		let c = null;
		try {
			if (t instanceof Uint8Array) {
				await r(t);
				return;
			} else if (t === void 0) c = {
				type: "value",
				value: void 0
			};
			else if (typeof t == "function") c = {
				type: "function",
				value: void 0
			};
			else {
				const o = Oc(t);
				o !== void 0 && (c = {
					type: "value",
					value: o
				});
			}
			if (c === null) {
				let o = JSON.stringify(t);
				o === void 0 && (o = String(t)), c = {
					type: "object",
					value: o
				};
			}
		} catch (o) {
			c = {
				type: "error",
				value: String(o)
			};
		}
		c && await s(jc(c, a));
	};
	function Zc({ displayBridge: e, displayTruncateMaxChars: t }) {
		return (a) => Lc(e, a, t);
	}
	var m = class {
		constructor(e, t, a) {
			this.type = e, this.schema = t, this.payload = a;
		}
		parse() {
			return this.schema.parse(this.payload);
		}
		toJSON() {
			return {
				type: this.type,
				...this.payload
			};
		}
	}, $;
	(function(e) {
		e.assertEqual = (s) => {};
		function t(s) {}
		e.assertIs = t;
		function a(s) {
			throw new Error();
		}
		e.assertNever = a, e.arrayToEnum = (s) => {
			const c = {};
			for (const o of s) c[o] = o;
			return c;
		}, e.getValidEnumValues = (s) => {
			const c = e.objectKeys(s).filter((d) => typeof s[s[d]] != "number"), o = {};
			for (const d of c) o[d] = s[d];
			return e.objectValues(o);
		}, e.objectValues = (s) => e.objectKeys(s).map(function(c) {
			return s[c];
		}), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
			const c = [];
			for (const o in s) Object.prototype.hasOwnProperty.call(s, o) && c.push(o);
			return c;
		}, e.find = (s, c) => {
			for (const o of s) if (c(o)) return o;
		}, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
		function r(s, c = " | ") {
			return s.map((o) => typeof o == "string" ? \`'\${o}'\` : o).join(c);
		}
		e.joinValues = r, e.jsonStringifyReplacer = (s, c) => typeof c == "bigint" ? c.toString() : c;
	})($ || ($ = {}));
	var Et;
	(function(e) {
		e.mergeShapes = (t, a) => ({
			...t,
			...a
		});
	})(Et || (Et = {}));
	const _ = $.arrayToEnum([
		"string",
		"nan",
		"number",
		"integer",
		"float",
		"boolean",
		"date",
		"bigint",
		"symbol",
		"function",
		"undefined",
		"null",
		"array",
		"object",
		"unknown",
		"promise",
		"void",
		"never",
		"map",
		"set"
	]), W = (e) => {
		switch (typeof e) {
			case "undefined": return _.undefined;
			case "string": return _.string;
			case "number": return Number.isNaN(e) ? _.nan : _.number;
			case "boolean": return _.boolean;
			case "function": return _.function;
			case "bigint": return _.bigint;
			case "symbol": return _.symbol;
			case "object": return Array.isArray(e) ? _.array : e === null ? _.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? _.promise : typeof Map < "u" && e instanceof Map ? _.map : typeof Set < "u" && e instanceof Set ? _.set : typeof Date < "u" && e instanceof Date ? _.date : _.object;
			default: return _.unknown;
		}
	}, h = $.arrayToEnum([
		"invalid_type",
		"invalid_literal",
		"custom",
		"invalid_union",
		"invalid_union_discriminator",
		"invalid_enum_value",
		"unrecognized_keys",
		"invalid_arguments",
		"invalid_return_type",
		"invalid_date",
		"invalid_string",
		"too_small",
		"too_big",
		"invalid_intersection_types",
		"not_multiple_of",
		"not_finite"
	]);
	var j = class Ic extends Error {
		get errors() {
			return this.issues;
		}
		constructor(t) {
			super(), this.issues = [], this.addIssue = (r) => {
				this.issues = [...this.issues, r];
			}, this.addIssues = (r = []) => {
				this.issues = [...this.issues, ...r];
			};
			const a = new.target.prototype;
			Object.setPrototypeOf ? Object.setPrototypeOf(this, a) : this.__proto__ = a, this.name = "ZodError", this.issues = t;
		}
		format(t) {
			const a = t || function(c) {
				return c.message;
			}, r = { _errors: [] }, s = (c) => {
				for (const o of c.issues) if (o.code === "invalid_union") o.unionErrors.map(s);
				else if (o.code === "invalid_return_type") s(o.returnTypeError);
				else if (o.code === "invalid_arguments") s(o.argumentsError);
				else if (o.path.length === 0) r._errors.push(a(o));
				else {
					let d = r, p = 0;
					for (; p < o.path.length;) {
						const f = o.path[p];
						p !== o.path.length - 1 ? d[f] = d[f] || { _errors: [] } : (d[f] = d[f] || { _errors: [] }, d[f]._errors.push(a(o))), d = d[f], p++;
					}
				}
			};
			return s(this), r;
		}
		static assert(t) {
			if (!(t instanceof Ic)) throw new Error(\`Not a ZodError: \${t}\`);
		}
		toString() {
			return this.message;
		}
		get message() {
			return JSON.stringify(this.issues, $.jsonStringifyReplacer, 2);
		}
		get isEmpty() {
			return this.issues.length === 0;
		}
		flatten(t = (a) => a.message) {
			const a = {}, r = [];
			for (const s of this.issues) if (s.path.length > 0) {
				const c = s.path[0];
				a[c] = a[c] || [], a[c].push(t(s));
			} else r.push(t(s));
			return {
				formErrors: r,
				fieldErrors: a
			};
		}
		get formErrors() {
			return this.flatten();
		}
	};
	j.create = (e) => new j(e);
	const re = (e, t) => {
		let a;
		switch (e.code) {
			case h.invalid_type:
				e.received === _.undefined ? a = "Required" : a = \`Expected \${e.expected}, received \${e.received}\`;
				break;
			case h.invalid_literal:
				a = \`Invalid literal value, expected \${JSON.stringify(e.expected, $.jsonStringifyReplacer)}\`;
				break;
			case h.unrecognized_keys:
				a = \`Unrecognized key(s) in object: \${$.joinValues(e.keys, ", ")}\`;
				break;
			case h.invalid_union:
				a = "Invalid input";
				break;
			case h.invalid_union_discriminator:
				a = \`Invalid discriminator value. Expected \${$.joinValues(e.options)}\`;
				break;
			case h.invalid_enum_value:
				a = \`Invalid enum value. Expected \${$.joinValues(e.options)}, received '\${e.received}'\`;
				break;
			case h.invalid_arguments:
				a = "Invalid function arguments";
				break;
			case h.invalid_return_type:
				a = "Invalid function return type";
				break;
			case h.invalid_date:
				a = "Invalid date";
				break;
			case h.invalid_string:
				typeof e.validation == "object" ? "includes" in e.validation ? (a = \`Invalid input: must include "\${e.validation.includes}"\`, typeof e.validation.position == "number" && (a = \`\${a} at one or more positions greater than or equal to \${e.validation.position}\`)) : "startsWith" in e.validation ? a = \`Invalid input: must start with "\${e.validation.startsWith}"\` : "endsWith" in e.validation ? a = \`Invalid input: must end with "\${e.validation.endsWith}"\` : $.assertNever(e.validation) : e.validation !== "regex" ? a = \`Invalid \${e.validation}\` : a = "Invalid";
				break;
			case h.too_small:
				e.type === "array" ? a = \`Array must contain \${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} \${e.minimum} element(s)\` : e.type === "string" ? a = \`String must contain \${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} \${e.minimum} character(s)\` : e.type === "number" ? a = \`Number must be \${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}\${e.minimum}\` : e.type === "bigint" ? a = \`Number must be \${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}\${e.minimum}\` : e.type === "date" ? a = \`Date must be \${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}\${new Date(Number(e.minimum))}\` : a = "Invalid input";
				break;
			case h.too_big:
				e.type === "array" ? a = \`Array must contain \${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} \${e.maximum} element(s)\` : e.type === "string" ? a = \`String must contain \${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} \${e.maximum} character(s)\` : e.type === "number" ? a = \`Number must be \${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} \${e.maximum}\` : e.type === "bigint" ? a = \`BigInt must be \${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} \${e.maximum}\` : e.type === "date" ? a = \`Date must be \${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} \${new Date(Number(e.maximum))}\` : a = "Invalid input";
				break;
			case h.custom:
				a = "Invalid input";
				break;
			case h.invalid_intersection_types:
				a = "Intersection results could not be merged";
				break;
			case h.not_multiple_of:
				a = \`Number must be a multiple of \${e.multipleOf}\`;
				break;
			case h.not_finite:
				a = "Number must be finite";
				break;
			default: a = t.defaultError, $.assertNever(e);
		}
		return { message: a };
	};
	let qc = re;
	function je() {
		return qc;
	}
	const Le = (e) => {
		const { data: t, path: a, errorMaps: r, issueData: s } = e, c = [...a, ...s.path || []], o = {
			...s,
			path: c
		};
		if (s.message !== void 0) return {
			...s,
			path: c,
			message: s.message
		};
		let d = "";
		const p = r.filter((f) => !!f).slice().reverse();
		for (const f of p) d = f(o, {
			data: t,
			defaultError: d
		}).message;
		return {
			...s,
			path: c,
			message: d
		};
	};
	function y(e, t) {
		const a = je(), r = Le({
			issueData: t,
			data: e.data,
			path: e.path,
			errorMaps: [
				e.common.contextualErrorMap,
				e.schemaErrorMap,
				a,
				a === re ? void 0 : re
			].filter((s) => !!s)
		});
		e.common.issues.push(r);
	}
	var N = class Pc {
		constructor() {
			this.value = "valid";
		}
		dirty() {
			this.value === "valid" && (this.value = "dirty");
		}
		abort() {
			this.value !== "aborted" && (this.value = "aborted");
		}
		static mergeArray(t, a) {
			const r = [];
			for (const s of a) {
				if (s.status === "aborted") return w;
				s.status === "dirty" && t.dirty(), r.push(s.value);
			}
			return {
				status: t.value,
				value: r
			};
		}
		static async mergeObjectAsync(t, a) {
			const r = [];
			for (const s of a) {
				const c = await s.key, o = await s.value;
				r.push({
					key: c,
					value: o
				});
			}
			return Pc.mergeObjectSync(t, r);
		}
		static mergeObjectSync(t, a) {
			const r = {};
			for (const s of a) {
				const { key: c, value: o } = s;
				if (c.status === "aborted" || o.status === "aborted") return w;
				c.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), c.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[c.value] = o.value);
			}
			return {
				status: t.value,
				value: r
			};
		}
	};
	const w = Object.freeze({ status: "aborted" }), se = (e) => ({
		status: "dirty",
		value: e
	}), E = (e) => ({
		status: "valid",
		value: e
	}), At = (e) => e.status === "aborted", Nt = (e) => e.status === "dirty", Y = (e) => e.status === "valid", he = (e) => typeof Promise < "u" && e instanceof Promise;
	var b;
	(function(e) {
		e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
	})(b || (b = {}));
	var L = class {
		constructor(e, t, a, r) {
			this._cachedPath = [], this.parent = e, this.data = t, this._path = a, this._key = r;
		}
		get path() {
			return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
		}
	};
	const Dt = (e, t) => {
		if (Y(t)) return {
			success: !0,
			data: t.value
		};
		if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
		return {
			success: !1,
			get error() {
				if (this._error) return this._error;
				const a = new j(e.common.issues);
				return this._error = a, this._error;
			}
		};
	};
	function S(e) {
		if (!e) return {};
		const { errorMap: t, invalid_type_error: a, required_error: r, description: s } = e;
		if (t && (a || r)) throw new Error(\`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.\`);
		return t ? {
			errorMap: t,
			description: s
		} : {
			errorMap: (o, d) => {
				const { message: p } = e;
				return o.code === "invalid_enum_value" ? { message: p ?? d.defaultError } : typeof d.data > "u" ? { message: p ?? r ?? d.defaultError } : o.code !== "invalid_type" ? { message: d.defaultError } : { message: p ?? a ?? d.defaultError };
			},
			description: s
		};
	}
	var T = class {
		get description() {
			return this._def.description;
		}
		_getType(e) {
			return W(e.data);
		}
		_getOrReturnCtx(e, t) {
			return t || {
				common: e.parent.common,
				data: e.data,
				parsedType: W(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent
			};
		}
		_processInputParams(e) {
			return {
				status: new N(),
				ctx: {
					common: e.parent.common,
					data: e.data,
					parsedType: W(e.data),
					schemaErrorMap: this._def.errorMap,
					path: e.path,
					parent: e.parent
				}
			};
		}
		_parseSync(e) {
			const t = this._parse(e);
			if (he(t)) throw new Error("Synchronous parse encountered promise.");
			return t;
		}
		_parseAsync(e) {
			const t = this._parse(e);
			return Promise.resolve(t);
		}
		parse(e, t) {
			const a = this.safeParse(e, t);
			if (a.success) return a.data;
			throw a.error;
		}
		safeParse(e, t) {
			const a = {
				common: {
					issues: [],
					async: t?.async ?? !1,
					contextualErrorMap: t?.errorMap
				},
				path: t?.path || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: e,
				parsedType: W(e)
			};
			return Dt(a, this._parseSync({
				data: e,
				path: a.path,
				parent: a
			}));
		}
		"~validate"(e) {
			const t = {
				common: {
					issues: [],
					async: !!this["~standard"].async
				},
				path: [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: e,
				parsedType: W(e)
			};
			if (!this["~standard"].async) try {
				const a = this._parseSync({
					data: e,
					path: [],
					parent: t
				});
				return Y(a) ? { value: a.value } : { issues: t.common.issues };
			} catch (a) {
				a?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
					issues: [],
					async: !0
				};
			}
			return this._parseAsync({
				data: e,
				path: [],
				parent: t
			}).then((a) => Y(a) ? { value: a.value } : { issues: t.common.issues });
		}
		async parseAsync(e, t) {
			const a = await this.safeParseAsync(e, t);
			if (a.success) return a.data;
			throw a.error;
		}
		async safeParseAsync(e, t) {
			const a = {
				common: {
					issues: [],
					contextualErrorMap: t?.errorMap,
					async: !0
				},
				path: t?.path || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: e,
				parsedType: W(e)
			}, r = this._parse({
				data: e,
				path: a.path,
				parent: a
			});
			return Dt(a, await (he(r) ? r : Promise.resolve(r)));
		}
		refine(e, t) {
			const a = (r) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
			return this._refinement((r, s) => {
				const c = e(r), o = () => s.addIssue({
					code: h.custom,
					...a(r)
				});
				return typeof Promise < "u" && c instanceof Promise ? c.then((d) => d ? !0 : (o(), !1)) : c ? !0 : (o(), !1);
			});
		}
		refinement(e, t) {
			return this._refinement((a, r) => e(a) ? !0 : (r.addIssue(typeof t == "function" ? t(a, r) : t), !1));
		}
		_refinement(e) {
			return new V({
				schema: this,
				typeName: v.ZodEffects,
				effect: {
					type: "refinement",
					refinement: e
				}
			});
		}
		superRefine(e) {
			return this._refinement(e);
		}
		constructor(e) {
			this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
				version: 1,
				vendor: "zod",
				validate: (t) => this["~validate"](t)
			};
		}
		optional() {
			return H.create(this, this._def);
		}
		nullable() {
			return J.create(this, this._def);
		}
		nullish() {
			return this.nullable().optional();
		}
		array() {
			return Q.create(this);
		}
		promise() {
			return ie.create(this, this._def);
		}
		or(e) {
			return ye.create([this, e], this._def);
		}
		and(e) {
			return _e.create(this, e, this._def);
		}
		transform(e) {
			return new V({
				...S(this._def),
				schema: this,
				typeName: v.ZodEffects,
				effect: {
					type: "transform",
					transform: e
				}
			});
		}
		default(e) {
			const t = typeof e == "function" ? e : () => e;
			return new Se({
				...S(this._def),
				innerType: this,
				defaultValue: t,
				typeName: v.ZodDefault
			});
		}
		brand() {
			return new jt({
				typeName: v.ZodBranded,
				type: this,
				...S(this._def)
			});
		}
		catch(e) {
			const t = typeof e == "function" ? e : () => e;
			return new xe({
				...S(this._def),
				innerType: this,
				catchValue: t,
				typeName: v.ZodCatch
			});
		}
		describe(e) {
			const t = this.constructor;
			return new t({
				...this._def,
				description: e
			});
		}
		pipe(e) {
			return Lt.create(this, e);
		}
		readonly() {
			return Te.create(this);
		}
		isOptional() {
			return this.safeParse(void 0).success;
		}
		isNullable() {
			return this.safeParse(null).success;
		}
	};
	const Uc = /^c[^\\s-]{8,}$/i, Fc = /^[0-9a-z]+$/, Vc = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Hc = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/i, Wc = /^[a-z0-9_-]{21}$/i, zc = /^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]*$/, Gc = /^[-+]?P(?!$)(?:(?:[-+]?\\d+Y)|(?:[-+]?\\d+[.,]\\d+Y$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:(?:[-+]?\\d+W)|(?:[-+]?\\d+[.,]\\d+W$))?(?:(?:[-+]?\\d+D)|(?:[-+]?\\d+[.,]\\d+D$))?(?:T(?=[\\d+-])(?:(?:[-+]?\\d+H)|(?:[-+]?\\d+[.,]\\d+H$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:[-+]?\\d+(?:[.,]\\d+)?S)?)??$/, Jc = /^(?!\\.)(?!.*\\.\\.)([A-Z0-9_'+\\-\\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\\-]*\\.)+[A-Z]{2,}$/i, Kc = "^(\\\\p{Extended_Pictographic}|\\\\p{Emoji_Component})+$";
	let Ze;
	const Yc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\/(3[0-2]|[12]?[0-9])$/, Qc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ed = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, td = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ad = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Mt = "((\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\\\d|30)|(02)-(0[1-9]|1\\\\d|2[0-8])))", rd = new RegExp(\`^\${Mt}$\`);
	function Ot(e) {
		let t = "[0-5]\\\\d";
		e.precision ? t = \`\${t}\\\\.\\\\d{\${e.precision}}\` : e.precision == null && (t = \`\${t}(\\\\.\\\\d+)?\`);
		const a = e.precision ? "+" : "?";
		return \`([01]\\\\d|2[0-3]):[0-5]\\\\d(:\${t})\${a}\`;
	}
	function sd(e) {
		return new RegExp(\`^\${Ot(e)}$\`);
	}
	function id(e) {
		let t = \`\${Mt}T\${Ot(e)}\`;
		const a = [];
		return a.push(e.local ? "Z?" : "Z"), e.offset && a.push("([+-]\\\\d{2}:?\\\\d{2})"), t = \`\${t}(\${a.join("|")})\`, new RegExp(\`^\${t}$\`);
	}
	function nd(e, t) {
		return !!((t === "v4" || !t) && Yc.test(e) || (t === "v6" || !t) && Qc.test(e));
	}
	function od(e, t) {
		if (!zc.test(e)) return !1;
		try {
			const [a] = e.split(".");
			if (!a) return !1;
			const r = a.replace(/-/g, "+").replace(/_/g, "/").padEnd(a.length + (4 - a.length % 4) % 4, "="), s = JSON.parse(atob(r));
			return !(typeof s != "object" || s === null || "typ" in s && s?.typ !== "JWT" || !s.alg || t && s.alg !== t);
		} catch {
			return !1;
		}
	}
	function cd(e, t) {
		return !!((t === "v4" || !t) && Xc.test(e) || (t === "v6" || !t) && ed.test(e));
	}
	var me = class ue extends T {
		_parse(t) {
			if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== _.string) {
				const s = this._getOrReturnCtx(t);
				return y(s, {
					code: h.invalid_type,
					expected: _.string,
					received: s.parsedType
				}), w;
			}
			const a = new N();
			let r;
			for (const s of this._def.checks) if (s.kind === "min") t.data.length < s.value && (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.too_small,
				minimum: s.value,
				type: "string",
				inclusive: !0,
				exact: !1,
				message: s.message
			}), a.dirty());
			else if (s.kind === "max") t.data.length > s.value && (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.too_big,
				maximum: s.value,
				type: "string",
				inclusive: !0,
				exact: !1,
				message: s.message
			}), a.dirty());
			else if (s.kind === "length") {
				const c = t.data.length > s.value, o = t.data.length < s.value;
				(c || o) && (r = this._getOrReturnCtx(t, r), c ? y(r, {
					code: h.too_big,
					maximum: s.value,
					type: "string",
					inclusive: !0,
					exact: !0,
					message: s.message
				}) : o && y(r, {
					code: h.too_small,
					minimum: s.value,
					type: "string",
					inclusive: !0,
					exact: !0,
					message: s.message
				}), a.dirty());
			} else if (s.kind === "email") Jc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "email",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "emoji") Ze || (Ze = new RegExp(Kc, "u")), Ze.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "emoji",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "uuid") Hc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "uuid",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "nanoid") Wc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "nanoid",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "cuid") Uc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "cuid",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "cuid2") Fc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "cuid2",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "ulid") Vc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "ulid",
				code: h.invalid_string,
				message: s.message
			}), a.dirty());
			else if (s.kind === "url") try {
				new URL(t.data);
			} catch {
				r = this._getOrReturnCtx(t, r), y(r, {
					validation: "url",
					code: h.invalid_string,
					message: s.message
				}), a.dirty();
			}
			else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "regex",
				code: h.invalid_string,
				message: s.message
			}), a.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.invalid_string,
				validation: {
					includes: s.value,
					position: s.position
				},
				message: s.message
			}), a.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.invalid_string,
				validation: { startsWith: s.value },
				message: s.message
			}), a.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.invalid_string,
				validation: { endsWith: s.value },
				message: s.message
			}), a.dirty()) : s.kind === "datetime" ? id(s).test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.invalid_string,
				validation: "datetime",
				message: s.message
			}), a.dirty()) : s.kind === "date" ? rd.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.invalid_string,
				validation: "date",
				message: s.message
			}), a.dirty()) : s.kind === "time" ? sd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.invalid_string,
				validation: "time",
				message: s.message
			}), a.dirty()) : s.kind === "duration" ? Gc.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "duration",
				code: h.invalid_string,
				message: s.message
			}), a.dirty()) : s.kind === "ip" ? nd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "ip",
				code: h.invalid_string,
				message: s.message
			}), a.dirty()) : s.kind === "jwt" ? od(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "jwt",
				code: h.invalid_string,
				message: s.message
			}), a.dirty()) : s.kind === "cidr" ? cd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "cidr",
				code: h.invalid_string,
				message: s.message
			}), a.dirty()) : s.kind === "base64" ? td.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "base64",
				code: h.invalid_string,
				message: s.message
			}), a.dirty()) : s.kind === "base64url" ? ad.test(t.data) || (r = this._getOrReturnCtx(t, r), y(r, {
				validation: "base64url",
				code: h.invalid_string,
				message: s.message
			}), a.dirty()) : $.assertNever(s);
			return {
				status: a.value,
				value: t.data
			};
		}
		_regex(t, a, r) {
			return this.refinement((s) => t.test(s), {
				validation: a,
				code: h.invalid_string,
				...b.errToObj(r)
			});
		}
		_addCheck(t) {
			return new ue({
				...this._def,
				checks: [...this._def.checks, t]
			});
		}
		email(t) {
			return this._addCheck({
				kind: "email",
				...b.errToObj(t)
			});
		}
		url(t) {
			return this._addCheck({
				kind: "url",
				...b.errToObj(t)
			});
		}
		emoji(t) {
			return this._addCheck({
				kind: "emoji",
				...b.errToObj(t)
			});
		}
		uuid(t) {
			return this._addCheck({
				kind: "uuid",
				...b.errToObj(t)
			});
		}
		nanoid(t) {
			return this._addCheck({
				kind: "nanoid",
				...b.errToObj(t)
			});
		}
		cuid(t) {
			return this._addCheck({
				kind: "cuid",
				...b.errToObj(t)
			});
		}
		cuid2(t) {
			return this._addCheck({
				kind: "cuid2",
				...b.errToObj(t)
			});
		}
		ulid(t) {
			return this._addCheck({
				kind: "ulid",
				...b.errToObj(t)
			});
		}
		base64(t) {
			return this._addCheck({
				kind: "base64",
				...b.errToObj(t)
			});
		}
		base64url(t) {
			return this._addCheck({
				kind: "base64url",
				...b.errToObj(t)
			});
		}
		jwt(t) {
			return this._addCheck({
				kind: "jwt",
				...b.errToObj(t)
			});
		}
		ip(t) {
			return this._addCheck({
				kind: "ip",
				...b.errToObj(t)
			});
		}
		cidr(t) {
			return this._addCheck({
				kind: "cidr",
				...b.errToObj(t)
			});
		}
		datetime(t) {
			return typeof t == "string" ? this._addCheck({
				kind: "datetime",
				precision: null,
				offset: !1,
				local: !1,
				message: t
			}) : this._addCheck({
				kind: "datetime",
				precision: typeof t?.precision > "u" ? null : t?.precision,
				offset: t?.offset ?? !1,
				local: t?.local ?? !1,
				...b.errToObj(t?.message)
			});
		}
		date(t) {
			return this._addCheck({
				kind: "date",
				message: t
			});
		}
		time(t) {
			return typeof t == "string" ? this._addCheck({
				kind: "time",
				precision: null,
				message: t
			}) : this._addCheck({
				kind: "time",
				precision: typeof t?.precision > "u" ? null : t?.precision,
				...b.errToObj(t?.message)
			});
		}
		duration(t) {
			return this._addCheck({
				kind: "duration",
				...b.errToObj(t)
			});
		}
		regex(t, a) {
			return this._addCheck({
				kind: "regex",
				regex: t,
				...b.errToObj(a)
			});
		}
		includes(t, a) {
			return this._addCheck({
				kind: "includes",
				value: t,
				position: a?.position,
				...b.errToObj(a?.message)
			});
		}
		startsWith(t, a) {
			return this._addCheck({
				kind: "startsWith",
				value: t,
				...b.errToObj(a)
			});
		}
		endsWith(t, a) {
			return this._addCheck({
				kind: "endsWith",
				value: t,
				...b.errToObj(a)
			});
		}
		min(t, a) {
			return this._addCheck({
				kind: "min",
				value: t,
				...b.errToObj(a)
			});
		}
		max(t, a) {
			return this._addCheck({
				kind: "max",
				value: t,
				...b.errToObj(a)
			});
		}
		length(t, a) {
			return this._addCheck({
				kind: "length",
				value: t,
				...b.errToObj(a)
			});
		}
		nonempty(t) {
			return this.min(1, b.errToObj(t));
		}
		trim() {
			return new ue({
				...this._def,
				checks: [...this._def.checks, { kind: "trim" }]
			});
		}
		toLowerCase() {
			return new ue({
				...this._def,
				checks: [...this._def.checks, { kind: "toLowerCase" }]
			});
		}
		toUpperCase() {
			return new ue({
				...this._def,
				checks: [...this._def.checks, { kind: "toUpperCase" }]
			});
		}
		get isDatetime() {
			return !!this._def.checks.find((t) => t.kind === "datetime");
		}
		get isDate() {
			return !!this._def.checks.find((t) => t.kind === "date");
		}
		get isTime() {
			return !!this._def.checks.find((t) => t.kind === "time");
		}
		get isDuration() {
			return !!this._def.checks.find((t) => t.kind === "duration");
		}
		get isEmail() {
			return !!this._def.checks.find((t) => t.kind === "email");
		}
		get isURL() {
			return !!this._def.checks.find((t) => t.kind === "url");
		}
		get isEmoji() {
			return !!this._def.checks.find((t) => t.kind === "emoji");
		}
		get isUUID() {
			return !!this._def.checks.find((t) => t.kind === "uuid");
		}
		get isNANOID() {
			return !!this._def.checks.find((t) => t.kind === "nanoid");
		}
		get isCUID() {
			return !!this._def.checks.find((t) => t.kind === "cuid");
		}
		get isCUID2() {
			return !!this._def.checks.find((t) => t.kind === "cuid2");
		}
		get isULID() {
			return !!this._def.checks.find((t) => t.kind === "ulid");
		}
		get isIP() {
			return !!this._def.checks.find((t) => t.kind === "ip");
		}
		get isCIDR() {
			return !!this._def.checks.find((t) => t.kind === "cidr");
		}
		get isBase64() {
			return !!this._def.checks.find((t) => t.kind === "base64");
		}
		get isBase64url() {
			return !!this._def.checks.find((t) => t.kind === "base64url");
		}
		get minLength() {
			let t = null;
			for (const a of this._def.checks) a.kind === "min" && (t === null || a.value > t) && (t = a.value);
			return t;
		}
		get maxLength() {
			let t = null;
			for (const a of this._def.checks) a.kind === "max" && (t === null || a.value < t) && (t = a.value);
			return t;
		}
	};
	me.create = (e) => new me({
		checks: [],
		typeName: v.ZodString,
		coerce: e?.coerce ?? !1,
		...S(e)
	});
	function dd(e, t) {
		const a = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, s = a > r ? a : r;
		return Number.parseInt(e.toFixed(s).replace(".", "")) % Number.parseInt(t.toFixed(s).replace(".", "")) / 10 ** s;
	}
	var qe = class Tt extends T {
		constructor() {
			super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
		}
		_parse(t) {
			if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== _.number) {
				const s = this._getOrReturnCtx(t);
				return y(s, {
					code: h.invalid_type,
					expected: _.number,
					received: s.parsedType
				}), w;
			}
			let a;
			const r = new N();
			for (const s of this._def.checks) s.kind === "int" ? $.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.invalid_type,
				expected: "integer",
				received: "float",
				message: s.message
			}), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.too_small,
				minimum: s.value,
				type: "number",
				inclusive: s.inclusive,
				exact: !1,
				message: s.message
			}), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.too_big,
				maximum: s.value,
				type: "number",
				inclusive: s.inclusive,
				exact: !1,
				message: s.message
			}), r.dirty()) : s.kind === "multipleOf" ? dd(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.not_multiple_of,
				multipleOf: s.value,
				message: s.message
			}), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.not_finite,
				message: s.message
			}), r.dirty()) : $.assertNever(s);
			return {
				status: r.value,
				value: t.data
			};
		}
		gte(t, a) {
			return this.setLimit("min", t, !0, b.toString(a));
		}
		gt(t, a) {
			return this.setLimit("min", t, !1, b.toString(a));
		}
		lte(t, a) {
			return this.setLimit("max", t, !0, b.toString(a));
		}
		lt(t, a) {
			return this.setLimit("max", t, !1, b.toString(a));
		}
		setLimit(t, a, r, s) {
			return new Tt({
				...this._def,
				checks: [...this._def.checks, {
					kind: t,
					value: a,
					inclusive: r,
					message: b.toString(s)
				}]
			});
		}
		_addCheck(t) {
			return new Tt({
				...this._def,
				checks: [...this._def.checks, t]
			});
		}
		int(t) {
			return this._addCheck({
				kind: "int",
				message: b.toString(t)
			});
		}
		positive(t) {
			return this._addCheck({
				kind: "min",
				value: 0,
				inclusive: !1,
				message: b.toString(t)
			});
		}
		negative(t) {
			return this._addCheck({
				kind: "max",
				value: 0,
				inclusive: !1,
				message: b.toString(t)
			});
		}
		nonpositive(t) {
			return this._addCheck({
				kind: "max",
				value: 0,
				inclusive: !0,
				message: b.toString(t)
			});
		}
		nonnegative(t) {
			return this._addCheck({
				kind: "min",
				value: 0,
				inclusive: !0,
				message: b.toString(t)
			});
		}
		multipleOf(t, a) {
			return this._addCheck({
				kind: "multipleOf",
				value: t,
				message: b.toString(a)
			});
		}
		finite(t) {
			return this._addCheck({
				kind: "finite",
				message: b.toString(t)
			});
		}
		safe(t) {
			return this._addCheck({
				kind: "min",
				inclusive: !0,
				value: Number.MIN_SAFE_INTEGER,
				message: b.toString(t)
			})._addCheck({
				kind: "max",
				inclusive: !0,
				value: Number.MAX_SAFE_INTEGER,
				message: b.toString(t)
			});
		}
		get minValue() {
			let t = null;
			for (const a of this._def.checks) a.kind === "min" && (t === null || a.value > t) && (t = a.value);
			return t;
		}
		get maxValue() {
			let t = null;
			for (const a of this._def.checks) a.kind === "max" && (t === null || a.value < t) && (t = a.value);
			return t;
		}
		get isInt() {
			return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && $.isInteger(t.value));
		}
		get isFinite() {
			let t = null, a = null;
			for (const r of this._def.checks) {
				if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
				r.kind === "min" ? (a === null || r.value > a) && (a = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
			}
			return Number.isFinite(a) && Number.isFinite(t);
		}
	};
	qe.create = (e) => new qe({
		checks: [],
		typeName: v.ZodNumber,
		coerce: e?.coerce || !1,
		...S(e)
	});
	var Ue = class $t extends T {
		constructor() {
			super(...arguments), this.min = this.gte, this.max = this.lte;
		}
		_parse(t) {
			if (this._def.coerce) try {
				t.data = BigInt(t.data);
			} catch {
				return this._getInvalidInput(t);
			}
			if (this._getType(t) !== _.bigint) return this._getInvalidInput(t);
			let a;
			const r = new N();
			for (const s of this._def.checks) s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.too_small,
				type: "bigint",
				minimum: s.value,
				inclusive: s.inclusive,
				message: s.message
			}), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.too_big,
				type: "bigint",
				maximum: s.value,
				inclusive: s.inclusive,
				message: s.message
			}), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), y(a, {
				code: h.not_multiple_of,
				multipleOf: s.value,
				message: s.message
			}), r.dirty()) : $.assertNever(s);
			return {
				status: r.value,
				value: t.data
			};
		}
		_getInvalidInput(t) {
			const a = this._getOrReturnCtx(t);
			return y(a, {
				code: h.invalid_type,
				expected: _.bigint,
				received: a.parsedType
			}), w;
		}
		gte(t, a) {
			return this.setLimit("min", t, !0, b.toString(a));
		}
		gt(t, a) {
			return this.setLimit("min", t, !1, b.toString(a));
		}
		lte(t, a) {
			return this.setLimit("max", t, !0, b.toString(a));
		}
		lt(t, a) {
			return this.setLimit("max", t, !1, b.toString(a));
		}
		setLimit(t, a, r, s) {
			return new $t({
				...this._def,
				checks: [...this._def.checks, {
					kind: t,
					value: a,
					inclusive: r,
					message: b.toString(s)
				}]
			});
		}
		_addCheck(t) {
			return new $t({
				...this._def,
				checks: [...this._def.checks, t]
			});
		}
		positive(t) {
			return this._addCheck({
				kind: "min",
				value: BigInt(0),
				inclusive: !1,
				message: b.toString(t)
			});
		}
		negative(t) {
			return this._addCheck({
				kind: "max",
				value: BigInt(0),
				inclusive: !1,
				message: b.toString(t)
			});
		}
		nonpositive(t) {
			return this._addCheck({
				kind: "max",
				value: BigInt(0),
				inclusive: !0,
				message: b.toString(t)
			});
		}
		nonnegative(t) {
			return this._addCheck({
				kind: "min",
				value: BigInt(0),
				inclusive: !0,
				message: b.toString(t)
			});
		}
		multipleOf(t, a) {
			return this._addCheck({
				kind: "multipleOf",
				value: t,
				message: b.toString(a)
			});
		}
		get minValue() {
			let t = null;
			for (const a of this._def.checks) a.kind === "min" && (t === null || a.value > t) && (t = a.value);
			return t;
		}
		get maxValue() {
			let t = null;
			for (const a of this._def.checks) a.kind === "max" && (t === null || a.value < t) && (t = a.value);
			return t;
		}
	};
	Ue.create = (e) => new Ue({
		checks: [],
		typeName: v.ZodBigInt,
		coerce: e?.coerce ?? !1,
		...S(e)
	});
	var Fe = class extends T {
		_parse(e) {
			if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== _.boolean) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					code: h.invalid_type,
					expected: _.boolean,
					received: t.parsedType
				}), w;
			}
			return E(e.data);
		}
	};
	Fe.create = (e) => new Fe({
		typeName: v.ZodBoolean,
		coerce: e?.coerce || !1,
		...S(e)
	});
	var Ve = class Ec extends T {
		_parse(t) {
			if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== _.date) {
				const s = this._getOrReturnCtx(t);
				return y(s, {
					code: h.invalid_type,
					expected: _.date,
					received: s.parsedType
				}), w;
			}
			if (Number.isNaN(t.data.getTime())) return y(this._getOrReturnCtx(t), { code: h.invalid_date }), w;
			const a = new N();
			let r;
			for (const s of this._def.checks) s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.too_small,
				message: s.message,
				inclusive: !0,
				exact: !1,
				minimum: s.value,
				type: "date"
			}), a.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), y(r, {
				code: h.too_big,
				message: s.message,
				inclusive: !0,
				exact: !1,
				maximum: s.value,
				type: "date"
			}), a.dirty()) : $.assertNever(s);
			return {
				status: a.value,
				value: new Date(t.data.getTime())
			};
		}
		_addCheck(t) {
			return new Ec({
				...this._def,
				checks: [...this._def.checks, t]
			});
		}
		min(t, a) {
			return this._addCheck({
				kind: "min",
				value: t.getTime(),
				message: b.toString(a)
			});
		}
		max(t, a) {
			return this._addCheck({
				kind: "max",
				value: t.getTime(),
				message: b.toString(a)
			});
		}
		get minDate() {
			let t = null;
			for (const a of this._def.checks) a.kind === "min" && (t === null || a.value > t) && (t = a.value);
			return t != null ? new Date(t) : null;
		}
		get maxDate() {
			let t = null;
			for (const a of this._def.checks) a.kind === "max" && (t === null || a.value < t) && (t = a.value);
			return t != null ? new Date(t) : null;
		}
	};
	Ve.create = (e) => new Ve({
		checks: [],
		coerce: e?.coerce || !1,
		typeName: v.ZodDate,
		...S(e)
	});
	var He = class extends T {
		_parse(e) {
			if (this._getType(e) !== _.symbol) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					code: h.invalid_type,
					expected: _.symbol,
					received: t.parsedType
				}), w;
			}
			return E(e.data);
		}
	};
	He.create = (e) => new He({
		typeName: v.ZodSymbol,
		...S(e)
	});
	var pe = class extends T {
		_parse(e) {
			if (this._getType(e) !== _.undefined) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					code: h.invalid_type,
					expected: _.undefined,
					received: t.parsedType
				}), w;
			}
			return E(e.data);
		}
	};
	pe.create = (e) => new pe({
		typeName: v.ZodUndefined,
		...S(e)
	});
	var fe = class extends T {
		_parse(e) {
			if (this._getType(e) !== _.null) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					code: h.invalid_type,
					expected: _.null,
					received: t.parsedType
				}), w;
			}
			return E(e.data);
		}
	};
	fe.create = (e) => new fe({
		typeName: v.ZodNull,
		...S(e)
	});
	var We = class extends T {
		constructor() {
			super(...arguments), this._any = !0;
		}
		_parse(e) {
			return E(e.data);
		}
	};
	We.create = (e) => new We({
		typeName: v.ZodAny,
		...S(e)
	});
	var X = class extends T {
		constructor() {
			super(...arguments), this._unknown = !0;
		}
		_parse(e) {
			return E(e.data);
		}
	};
	X.create = (e) => new X({
		typeName: v.ZodUnknown,
		...S(e)
	});
	var z = class extends T {
		_parse(e) {
			const t = this._getOrReturnCtx(e);
			return y(t, {
				code: h.invalid_type,
				expected: _.never,
				received: t.parsedType
			}), w;
		}
	};
	z.create = (e) => new z({
		typeName: v.ZodNever,
		...S(e)
	});
	var ze = class extends T {
		_parse(e) {
			if (this._getType(e) !== _.undefined) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					code: h.invalid_type,
					expected: _.void,
					received: t.parsedType
				}), w;
			}
			return E(e.data);
		}
	};
	ze.create = (e) => new ze({
		typeName: v.ZodVoid,
		...S(e)
	});
	var Q = class Oe extends T {
		_parse(t) {
			const { ctx: a, status: r } = this._processInputParams(t), s = this._def;
			if (a.parsedType !== _.array) return y(a, {
				code: h.invalid_type,
				expected: _.array,
				received: a.parsedType
			}), w;
			if (s.exactLength !== null) {
				const o = a.data.length > s.exactLength.value, d = a.data.length < s.exactLength.value;
				(o || d) && (y(a, {
					code: o ? h.too_big : h.too_small,
					minimum: d ? s.exactLength.value : void 0,
					maximum: o ? s.exactLength.value : void 0,
					type: "array",
					inclusive: !0,
					exact: !0,
					message: s.exactLength.message
				}), r.dirty());
			}
			if (s.minLength !== null && a.data.length < s.minLength.value && (y(a, {
				code: h.too_small,
				minimum: s.minLength.value,
				type: "array",
				inclusive: !0,
				exact: !1,
				message: s.minLength.message
			}), r.dirty()), s.maxLength !== null && a.data.length > s.maxLength.value && (y(a, {
				code: h.too_big,
				maximum: s.maxLength.value,
				type: "array",
				inclusive: !0,
				exact: !1,
				message: s.maxLength.message
			}), r.dirty()), a.common.async) return Promise.all([...a.data].map((o, d) => s.type._parseAsync(new L(a, o, a.path, d)))).then((o) => N.mergeArray(r, o));
			const c = [...a.data].map((o, d) => s.type._parseSync(new L(a, o, a.path, d)));
			return N.mergeArray(r, c);
		}
		get element() {
			return this._def.type;
		}
		min(t, a) {
			return new Oe({
				...this._def,
				minLength: {
					value: t,
					message: b.toString(a)
				}
			});
		}
		max(t, a) {
			return new Oe({
				...this._def,
				maxLength: {
					value: t,
					message: b.toString(a)
				}
			});
		}
		length(t, a) {
			return new Oe({
				...this._def,
				exactLength: {
					value: t,
					message: b.toString(a)
				}
			});
		}
		nonempty(t) {
			return this.min(1, t);
		}
	};
	Q.create = (e, t) => new Q({
		type: e,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: v.ZodArray,
		...S(t)
	});
	function ee(e) {
		if (e instanceof M) {
			const t = {};
			for (const a in e.shape) {
				const r = e.shape[a];
				t[a] = H.create(ee(r));
			}
			return new M({
				...e._def,
				shape: () => t
			});
		} else return e instanceof Q ? new Q({
			...e._def,
			type: ee(e.element)
		}) : e instanceof H ? H.create(ee(e.unwrap())) : e instanceof J ? J.create(ee(e.unwrap())) : e instanceof G ? G.create(e.items.map((t) => ee(t))) : e;
	}
	var M = class B extends T {
		constructor() {
			super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
		}
		_getCached() {
			if (this._cached !== null) return this._cached;
			const t = this._def.shape(), a = $.objectKeys(t);
			return this._cached = {
				shape: t,
				keys: a
			}, this._cached;
		}
		_parse(t) {
			if (this._getType(t) !== _.object) {
				const p = this._getOrReturnCtx(t);
				return y(p, {
					code: h.invalid_type,
					expected: _.object,
					received: p.parsedType
				}), w;
			}
			const { status: a, ctx: r } = this._processInputParams(t), { shape: s, keys: c } = this._getCached(), o = [];
			if (!(this._def.catchall instanceof z && this._def.unknownKeys === "strip")) for (const p in r.data) c.includes(p) || o.push(p);
			const d = [];
			for (const p of c) {
				const f = s[p], R = r.data[p];
				d.push({
					key: {
						status: "valid",
						value: p
					},
					value: f._parse(new L(r, R, r.path, p)),
					alwaysSet: p in r.data
				});
			}
			if (this._def.catchall instanceof z) {
				const p = this._def.unknownKeys;
				if (p === "passthrough") for (const f of o) d.push({
					key: {
						status: "valid",
						value: f
					},
					value: {
						status: "valid",
						value: r.data[f]
					}
				});
				else if (p === "strict") o.length > 0 && (y(r, {
					code: h.unrecognized_keys,
					keys: o
				}), a.dirty());
				else if (p !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
			} else {
				const p = this._def.catchall;
				for (const f of o) {
					const R = r.data[f];
					d.push({
						key: {
							status: "valid",
							value: f
						},
						value: p._parse(new L(r, R, r.path, f)),
						alwaysSet: f in r.data
					});
				}
			}
			return r.common.async ? Promise.resolve().then(async () => {
				const p = [];
				for (const f of d) {
					const R = await f.key, P = await f.value;
					p.push({
						key: R,
						value: P,
						alwaysSet: f.alwaysSet
					});
				}
				return p;
			}).then((p) => N.mergeObjectSync(a, p)) : N.mergeObjectSync(a, d);
		}
		get shape() {
			return this._def.shape();
		}
		strict(t) {
			return b.errToObj, new B({
				...this._def,
				unknownKeys: "strict",
				...t !== void 0 ? { errorMap: (a, r) => {
					const s = this._def.errorMap?.(a, r).message ?? r.defaultError;
					return a.code === "unrecognized_keys" ? { message: b.errToObj(t).message ?? s } : { message: s };
				} } : {}
			});
		}
		strip() {
			return new B({
				...this._def,
				unknownKeys: "strip"
			});
		}
		passthrough() {
			return new B({
				...this._def,
				unknownKeys: "passthrough"
			});
		}
		extend(t) {
			return new B({
				...this._def,
				shape: () => ({
					...this._def.shape(),
					...t
				})
			});
		}
		merge(t) {
			return new B({
				unknownKeys: t._def.unknownKeys,
				catchall: t._def.catchall,
				shape: () => ({
					...this._def.shape(),
					...t._def.shape()
				}),
				typeName: v.ZodObject
			});
		}
		setKey(t, a) {
			return this.augment({ [t]: a });
		}
		catchall(t) {
			return new B({
				...this._def,
				catchall: t
			});
		}
		pick(t) {
			const a = {};
			for (const r of $.objectKeys(t)) t[r] && this.shape[r] && (a[r] = this.shape[r]);
			return new B({
				...this._def,
				shape: () => a
			});
		}
		omit(t) {
			const a = {};
			for (const r of $.objectKeys(this.shape)) t[r] || (a[r] = this.shape[r]);
			return new B({
				...this._def,
				shape: () => a
			});
		}
		deepPartial() {
			return ee(this);
		}
		partial(t) {
			const a = {};
			for (const r of $.objectKeys(this.shape)) {
				const s = this.shape[r];
				t && !t[r] ? a[r] = s : a[r] = s.optional();
			}
			return new B({
				...this._def,
				shape: () => a
			});
		}
		required(t) {
			const a = {};
			for (const r of $.objectKeys(this.shape)) if (t && !t[r]) a[r] = this.shape[r];
			else {
				let s = this.shape[r];
				for (; s instanceof H;) s = s._def.innerType;
				a[r] = s;
			}
			return new B({
				...this._def,
				shape: () => a
			});
		}
		keyof() {
			return Bt($.objectKeys(this.shape));
		}
	};
	M.create = (e, t) => new M({
		shape: () => e,
		unknownKeys: "strip",
		catchall: z.create(),
		typeName: v.ZodObject,
		...S(t)
	}), M.strictCreate = (e, t) => new M({
		shape: () => e,
		unknownKeys: "strict",
		catchall: z.create(),
		typeName: v.ZodObject,
		...S(t)
	}), M.lazycreate = (e, t) => new M({
		shape: e,
		unknownKeys: "strip",
		catchall: z.create(),
		typeName: v.ZodObject,
		...S(t)
	});
	var ye = class extends T {
		_parse(e) {
			const { ctx: t } = this._processInputParams(e), a = this._def.options;
			function r(s) {
				for (const o of s) if (o.result.status === "valid") return o.result;
				for (const o of s) if (o.result.status === "dirty") return t.common.issues.push(...o.ctx.common.issues), o.result;
				const c = s.map((o) => new j(o.ctx.common.issues));
				return y(t, {
					code: h.invalid_union,
					unionErrors: c
				}), w;
			}
			if (t.common.async) return Promise.all(a.map(async (s) => {
				const c = {
					...t,
					common: {
						...t.common,
						issues: []
					},
					parent: null
				};
				return {
					result: await s._parseAsync({
						data: t.data,
						path: t.path,
						parent: c
					}),
					ctx: c
				};
			})).then(r);
			{
				let s;
				const c = [];
				for (const d of a) {
					const p = {
						...t,
						common: {
							...t.common,
							issues: []
						},
						parent: null
					}, f = d._parseSync({
						data: t.data,
						path: t.path,
						parent: p
					});
					if (f.status === "valid") return f;
					f.status === "dirty" && !s && (s = {
						result: f,
						ctx: p
					}), p.common.issues.length && c.push(p.common.issues);
				}
				if (s) return t.common.issues.push(...s.ctx.common.issues), s.result;
				const o = c.map((d) => new j(d));
				return y(t, {
					code: h.invalid_union,
					unionErrors: o
				}), w;
			}
		}
		get options() {
			return this._def.options;
		}
	};
	ye.create = (e, t) => new ye({
		options: e,
		typeName: v.ZodUnion,
		...S(t)
	});
	const F = (e) => e instanceof be ? F(e.schema) : e instanceof V ? F(e.innerType()) : e instanceof ge ? [e.value] : e instanceof we ? e.options : e instanceof ve ? $.objectValues(e.enum) : e instanceof Se ? F(e._def.innerType) : e instanceof pe ? [void 0] : e instanceof fe ? [null] : e instanceof H ? [void 0, ...F(e.unwrap())] : e instanceof J ? [null, ...F(e.unwrap())] : e instanceof jt || e instanceof Te ? F(e.unwrap()) : e instanceof xe ? F(e._def.innerType) : [];
	var ld = class Ac extends T {
		_parse(t) {
			const { ctx: a } = this._processInputParams(t);
			if (a.parsedType !== _.object) return y(a, {
				code: h.invalid_type,
				expected: _.object,
				received: a.parsedType
			}), w;
			const r = this.discriminator, s = a.data[r], c = this.optionsMap.get(s);
			return c ? a.common.async ? c._parseAsync({
				data: a.data,
				path: a.path,
				parent: a
			}) : c._parseSync({
				data: a.data,
				path: a.path,
				parent: a
			}) : (y(a, {
				code: h.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [r]
			}), w);
		}
		get discriminator() {
			return this._def.discriminator;
		}
		get options() {
			return this._def.options;
		}
		get optionsMap() {
			return this._def.optionsMap;
		}
		static create(t, a, r) {
			const s = /* @__PURE__ */ new Map();
			for (const c of a) {
				const o = F(c.shape[t]);
				if (!o.length) throw new Error(\`A discriminator value for key \\\`\${t}\\\` could not be extracted from all schema options\`);
				for (const d of o) {
					if (s.has(d)) throw new Error(\`Discriminator property \${String(t)} has duplicate value \${String(d)}\`);
					s.set(d, c);
				}
			}
			return new Ac({
				typeName: v.ZodDiscriminatedUnion,
				discriminator: t,
				options: a,
				optionsMap: s,
				...S(r)
			});
		}
	};
	function Ge(e, t) {
		const a = W(e), r = W(t);
		if (e === t) return {
			valid: !0,
			data: e
		};
		if (a === _.object && r === _.object) {
			const s = $.objectKeys(t), c = $.objectKeys(e).filter((d) => s.indexOf(d) !== -1), o = {
				...e,
				...t
			};
			for (const d of c) {
				const p = Ge(e[d], t[d]);
				if (!p.valid) return { valid: !1 };
				o[d] = p.data;
			}
			return {
				valid: !0,
				data: o
			};
		} else if (a === _.array && r === _.array) {
			if (e.length !== t.length) return { valid: !1 };
			const s = [];
			for (let c = 0; c < e.length; c++) {
				const o = e[c], d = t[c], p = Ge(o, d);
				if (!p.valid) return { valid: !1 };
				s.push(p.data);
			}
			return {
				valid: !0,
				data: s
			};
		} else return a === _.date && r === _.date && +e == +t ? {
			valid: !0,
			data: e
		} : { valid: !1 };
	}
	var _e = class extends T {
		_parse(e) {
			const { status: t, ctx: a } = this._processInputParams(e), r = (s, c) => {
				if (At(s) || At(c)) return w;
				const o = Ge(s.value, c.value);
				return o.valid ? ((Nt(s) || Nt(c)) && t.dirty(), {
					status: t.value,
					value: o.data
				}) : (y(a, { code: h.invalid_intersection_types }), w);
			};
			return a.common.async ? Promise.all([this._def.left._parseAsync({
				data: a.data,
				path: a.path,
				parent: a
			}), this._def.right._parseAsync({
				data: a.data,
				path: a.path,
				parent: a
			})]).then(([s, c]) => r(s, c)) : r(this._def.left._parseSync({
				data: a.data,
				path: a.path,
				parent: a
			}), this._def.right._parseSync({
				data: a.data,
				path: a.path,
				parent: a
			}));
		}
	};
	_e.create = (e, t, a) => new _e({
		left: e,
		right: t,
		typeName: v.ZodIntersection,
		...S(a)
	});
	var G = class Nc extends T {
		_parse(t) {
			const { status: a, ctx: r } = this._processInputParams(t);
			if (r.parsedType !== _.array) return y(r, {
				code: h.invalid_type,
				expected: _.array,
				received: r.parsedType
			}), w;
			if (r.data.length < this._def.items.length) return y(r, {
				code: h.too_small,
				minimum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array"
			}), w;
			!this._def.rest && r.data.length > this._def.items.length && (y(r, {
				code: h.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array"
			}), a.dirty());
			const s = [...r.data].map((c, o) => {
				const d = this._def.items[o] || this._def.rest;
				return d ? d._parse(new L(r, c, r.path, o)) : null;
			}).filter((c) => !!c);
			return r.common.async ? Promise.all(s).then((c) => N.mergeArray(a, c)) : N.mergeArray(a, s);
		}
		get items() {
			return this._def.items;
		}
		rest(t) {
			return new Nc({
				...this._def,
				rest: t
			});
		}
	};
	G.create = (e, t) => {
		if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
		return new G({
			items: e,
			typeName: v.ZodTuple,
			rest: null,
			...S(t)
		});
	};
	var ud = class kt extends T {
		get keySchema() {
			return this._def.keyType;
		}
		get valueSchema() {
			return this._def.valueType;
		}
		_parse(t) {
			const { status: a, ctx: r } = this._processInputParams(t);
			if (r.parsedType !== _.object) return y(r, {
				code: h.invalid_type,
				expected: _.object,
				received: r.parsedType
			}), w;
			const s = [], c = this._def.keyType, o = this._def.valueType;
			for (const d in r.data) s.push({
				key: c._parse(new L(r, d, r.path, d)),
				value: o._parse(new L(r, r.data[d], r.path, d)),
				alwaysSet: d in r.data
			});
			return r.common.async ? N.mergeObjectAsync(a, s) : N.mergeObjectSync(a, s);
		}
		get element() {
			return this._def.valueType;
		}
		static create(t, a, r) {
			return a instanceof T ? new kt({
				keyType: t,
				valueType: a,
				typeName: v.ZodRecord,
				...S(r)
			}) : new kt({
				keyType: me.create(),
				valueType: t,
				typeName: v.ZodRecord,
				...S(a)
			});
		}
	}, Je = class extends T {
		get keySchema() {
			return this._def.keyType;
		}
		get valueSchema() {
			return this._def.valueType;
		}
		_parse(e) {
			const { status: t, ctx: a } = this._processInputParams(e);
			if (a.parsedType !== _.map) return y(a, {
				code: h.invalid_type,
				expected: _.map,
				received: a.parsedType
			}), w;
			const r = this._def.keyType, s = this._def.valueType, c = [...a.data.entries()].map(([o, d], p) => ({
				key: r._parse(new L(a, o, a.path, [p, "key"])),
				value: s._parse(new L(a, d, a.path, [p, "value"]))
			}));
			if (a.common.async) {
				const o = /* @__PURE__ */ new Map();
				return Promise.resolve().then(async () => {
					for (const d of c) {
						const p = await d.key, f = await d.value;
						if (p.status === "aborted" || f.status === "aborted") return w;
						(p.status === "dirty" || f.status === "dirty") && t.dirty(), o.set(p.value, f.value);
					}
					return {
						status: t.value,
						value: o
					};
				});
			} else {
				const o = /* @__PURE__ */ new Map();
				for (const d of c) {
					const p = d.key, f = d.value;
					if (p.status === "aborted" || f.status === "aborted") return w;
					(p.status === "dirty" || f.status === "dirty") && t.dirty(), o.set(p.value, f.value);
				}
				return {
					status: t.value,
					value: o
				};
			}
		}
	};
	Je.create = (e, t, a) => new Je({
		valueType: t,
		keyType: e,
		typeName: v.ZodMap,
		...S(a)
	});
	var Ke = class Rt extends T {
		_parse(t) {
			const { status: a, ctx: r } = this._processInputParams(t);
			if (r.parsedType !== _.set) return y(r, {
				code: h.invalid_type,
				expected: _.set,
				received: r.parsedType
			}), w;
			const s = this._def;
			s.minSize !== null && r.data.size < s.minSize.value && (y(r, {
				code: h.too_small,
				minimum: s.minSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: s.minSize.message
			}), a.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (y(r, {
				code: h.too_big,
				maximum: s.maxSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: s.maxSize.message
			}), a.dirty());
			const c = this._def.valueType;
			function o(p) {
				const f = /* @__PURE__ */ new Set();
				for (const R of p) {
					if (R.status === "aborted") return w;
					R.status === "dirty" && a.dirty(), f.add(R.value);
				}
				return {
					status: a.value,
					value: f
				};
			}
			const d = [...r.data.values()].map((p, f) => c._parse(new L(r, p, r.path, f)));
			return r.common.async ? Promise.all(d).then((p) => o(p)) : o(d);
		}
		min(t, a) {
			return new Rt({
				...this._def,
				minSize: {
					value: t,
					message: b.toString(a)
				}
			});
		}
		max(t, a) {
			return new Rt({
				...this._def,
				maxSize: {
					value: t,
					message: b.toString(a)
				}
			});
		}
		size(t, a) {
			return this.min(t, a).max(t, a);
		}
		nonempty(t) {
			return this.min(1, t);
		}
	};
	Ke.create = (e, t) => new Ke({
		valueType: e,
		minSize: null,
		maxSize: null,
		typeName: v.ZodSet,
		...S(t)
	});
	var hd = class Be extends T {
		constructor() {
			super(...arguments), this.validate = this.implement;
		}
		_parse(t) {
			const { ctx: a } = this._processInputParams(t);
			if (a.parsedType !== _.function) return y(a, {
				code: h.invalid_type,
				expected: _.function,
				received: a.parsedType
			}), w;
			function r(d, p) {
				return Le({
					data: d,
					path: a.path,
					errorMaps: [
						a.common.contextualErrorMap,
						a.schemaErrorMap,
						je(),
						re
					].filter((f) => !!f),
					issueData: {
						code: h.invalid_arguments,
						argumentsError: p
					}
				});
			}
			function s(d, p) {
				return Le({
					data: d,
					path: a.path,
					errorMaps: [
						a.common.contextualErrorMap,
						a.schemaErrorMap,
						je(),
						re
					].filter((f) => !!f),
					issueData: {
						code: h.invalid_return_type,
						returnTypeError: p
					}
				});
			}
			const c = { errorMap: a.common.contextualErrorMap }, o = a.data;
			if (this._def.returns instanceof ie) {
				const d = this;
				return E(async function(...p) {
					const f = new j([]), R = await d._def.args.parseAsync(p, c).catch((D) => {
						throw f.addIssue(r(p, D)), f;
					}), P = await Reflect.apply(o, this, R);
					return await d._def.returns._def.type.parseAsync(P, c).catch((D) => {
						throw f.addIssue(s(P, D)), f;
					});
				});
			} else {
				const d = this;
				return E(function(...p) {
					const f = d._def.args.safeParse(p, c);
					if (!f.success) throw new j([r(p, f.error)]);
					const R = Reflect.apply(o, this, f.data), P = d._def.returns.safeParse(R, c);
					if (!P.success) throw new j([s(R, P.error)]);
					return P.data;
				});
			}
		}
		parameters() {
			return this._def.args;
		}
		returnType() {
			return this._def.returns;
		}
		args(...t) {
			return new Be({
				...this._def,
				args: G.create(t).rest(X.create())
			});
		}
		returns(t) {
			return new Be({
				...this._def,
				returns: t
			});
		}
		implement(t) {
			return this.parse(t);
		}
		strictImplement(t) {
			return this.parse(t);
		}
		static create(t, a, r) {
			return new Be({
				args: t || G.create([]).rest(X.create()),
				returns: a || X.create(),
				typeName: v.ZodFunction,
				...S(r)
			});
		}
	}, be = class extends T {
		get schema() {
			return this._def.getter();
		}
		_parse(e) {
			const { ctx: t } = this._processInputParams(e);
			return this._def.getter()._parse({
				data: t.data,
				path: t.path,
				parent: t
			});
		}
	};
	be.create = (e, t) => new be({
		getter: e,
		typeName: v.ZodLazy,
		...S(t)
	});
	var ge = class extends T {
		_parse(e) {
			if (e.data !== this._def.value) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					received: t.data,
					code: h.invalid_literal,
					expected: this._def.value
				}), w;
			}
			return {
				status: "valid",
				value: e.data
			};
		}
		get value() {
			return this._def.value;
		}
	};
	ge.create = (e, t) => new ge({
		value: e,
		typeName: v.ZodLiteral,
		...S(t)
	});
	function Bt(e, t) {
		return new we({
			values: e,
			typeName: v.ZodEnum,
			...S(t)
		});
	}
	var we = class Ct extends T {
		_parse(t) {
			if (typeof t.data != "string") {
				const a = this._getOrReturnCtx(t), r = this._def.values;
				return y(a, {
					expected: $.joinValues(r),
					received: a.parsedType,
					code: h.invalid_type
				}), w;
			}
			if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
				const a = this._getOrReturnCtx(t), r = this._def.values;
				return y(a, {
					received: a.data,
					code: h.invalid_enum_value,
					options: r
				}), w;
			}
			return E(t.data);
		}
		get options() {
			return this._def.values;
		}
		get enum() {
			const t = {};
			for (const a of this._def.values) t[a] = a;
			return t;
		}
		get Values() {
			const t = {};
			for (const a of this._def.values) t[a] = a;
			return t;
		}
		get Enum() {
			const t = {};
			for (const a of this._def.values) t[a] = a;
			return t;
		}
		extract(t, a = this._def) {
			return Ct.create(t, {
				...this._def,
				...a
			});
		}
		exclude(t, a = this._def) {
			return Ct.create(this.options.filter((r) => !t.includes(r)), {
				...this._def,
				...a
			});
		}
	};
	we.create = Bt;
	var ve = class extends T {
		_parse(e) {
			const t = $.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(e);
			if (a.parsedType !== _.string && a.parsedType !== _.number) {
				const r = $.objectValues(t);
				return y(a, {
					expected: $.joinValues(r),
					received: a.parsedType,
					code: h.invalid_type
				}), w;
			}
			if (this._cache || (this._cache = new Set($.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
				const r = $.objectValues(t);
				return y(a, {
					received: a.data,
					code: h.invalid_enum_value,
					options: r
				}), w;
			}
			return E(e.data);
		}
		get enum() {
			return this._def.values;
		}
	};
	ve.create = (e, t) => new ve({
		values: e,
		typeName: v.ZodNativeEnum,
		...S(t)
	});
	var ie = class extends T {
		unwrap() {
			return this._def.type;
		}
		_parse(e) {
			const { ctx: t } = this._processInputParams(e);
			return t.parsedType !== _.promise && t.common.async === !1 ? (y(t, {
				code: h.invalid_type,
				expected: _.promise,
				received: t.parsedType
			}), w) : E((t.parsedType === _.promise ? t.data : Promise.resolve(t.data)).then((a) => this._def.type.parseAsync(a, {
				path: t.path,
				errorMap: t.common.contextualErrorMap
			})));
		}
	};
	ie.create = (e, t) => new ie({
		type: e,
		typeName: v.ZodPromise,
		...S(t)
	});
	var V = class extends T {
		innerType() {
			return this._def.schema;
		}
		sourceType() {
			return this._def.schema._def.typeName === v.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
		}
		_parse(e) {
			const { status: t, ctx: a } = this._processInputParams(e), r = this._def.effect || null, s = {
				addIssue: (c) => {
					y(a, c), c.fatal ? t.abort() : t.dirty();
				},
				get path() {
					return a.path;
				}
			};
			if (s.addIssue = s.addIssue.bind(s), r.type === "preprocess") {
				const c = r.transform(a.data, s);
				if (a.common.async) return Promise.resolve(c).then(async (o) => {
					if (t.value === "aborted") return w;
					const d = await this._def.schema._parseAsync({
						data: o,
						path: a.path,
						parent: a
					});
					return d.status === "aborted" ? w : d.status === "dirty" || t.value === "dirty" ? se(d.value) : d;
				});
				{
					if (t.value === "aborted") return w;
					const o = this._def.schema._parseSync({
						data: c,
						path: a.path,
						parent: a
					});
					return o.status === "aborted" ? w : o.status === "dirty" || t.value === "dirty" ? se(o.value) : o;
				}
			}
			if (r.type === "refinement") {
				const c = (o) => {
					const d = r.refinement(o, s);
					if (a.common.async) return Promise.resolve(d);
					if (d instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
					return o;
				};
				if (a.common.async === !1) {
					const o = this._def.schema._parseSync({
						data: a.data,
						path: a.path,
						parent: a
					});
					return o.status === "aborted" ? w : (o.status === "dirty" && t.dirty(), c(o.value), {
						status: t.value,
						value: o.value
					});
				} else return this._def.schema._parseAsync({
					data: a.data,
					path: a.path,
					parent: a
				}).then((o) => o.status === "aborted" ? w : (o.status === "dirty" && t.dirty(), c(o.value).then(() => ({
					status: t.value,
					value: o.value
				}))));
			}
			if (r.type === "transform") if (a.common.async === !1) {
				const c = this._def.schema._parseSync({
					data: a.data,
					path: a.path,
					parent: a
				});
				if (!Y(c)) return w;
				const o = r.transform(c.value, s);
				if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
				return {
					status: t.value,
					value: o
				};
			} else return this._def.schema._parseAsync({
				data: a.data,
				path: a.path,
				parent: a
			}).then((c) => Y(c) ? Promise.resolve(r.transform(c.value, s)).then((o) => ({
				status: t.value,
				value: o
			})) : w);
			$.assertNever(r);
		}
	};
	V.create = (e, t, a) => new V({
		schema: e,
		typeName: v.ZodEffects,
		effect: t,
		...S(a)
	}), V.createWithPreprocess = (e, t, a) => new V({
		schema: t,
		effect: {
			type: "preprocess",
			transform: e
		},
		typeName: v.ZodEffects,
		...S(a)
	});
	var H = class extends T {
		_parse(e) {
			return this._getType(e) === _.undefined ? E(void 0) : this._def.innerType._parse(e);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	H.create = (e, t) => new H({
		innerType: e,
		typeName: v.ZodOptional,
		...S(t)
	});
	var J = class extends T {
		_parse(e) {
			return this._getType(e) === _.null ? E(null) : this._def.innerType._parse(e);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	J.create = (e, t) => new J({
		innerType: e,
		typeName: v.ZodNullable,
		...S(t)
	});
	var Se = class extends T {
		_parse(e) {
			const { ctx: t } = this._processInputParams(e);
			let a = t.data;
			return t.parsedType === _.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
				data: a,
				path: t.path,
				parent: t
			});
		}
		removeDefault() {
			return this._def.innerType;
		}
	};
	Se.create = (e, t) => new Se({
		innerType: e,
		typeName: v.ZodDefault,
		defaultValue: typeof t.default == "function" ? t.default : () => t.default,
		...S(t)
	});
	var xe = class extends T {
		_parse(e) {
			const { ctx: t } = this._processInputParams(e), a = {
				...t,
				common: {
					...t.common,
					issues: []
				}
			}, r = this._def.innerType._parse({
				data: a.data,
				path: a.path,
				parent: { ...a }
			});
			return he(r) ? r.then((s) => ({
				status: "valid",
				value: s.status === "valid" ? s.value : this._def.catchValue({
					get error() {
						return new j(a.common.issues);
					},
					input: a.data
				})
			})) : {
				status: "valid",
				value: r.status === "valid" ? r.value : this._def.catchValue({
					get error() {
						return new j(a.common.issues);
					},
					input: a.data
				})
			};
		}
		removeCatch() {
			return this._def.innerType;
		}
	};
	xe.create = (e, t) => new xe({
		innerType: e,
		typeName: v.ZodCatch,
		catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
		...S(t)
	});
	var Ye = class extends T {
		_parse(e) {
			if (this._getType(e) !== _.nan) {
				const t = this._getOrReturnCtx(e);
				return y(t, {
					code: h.invalid_type,
					expected: _.nan,
					received: t.parsedType
				}), w;
			}
			return {
				status: "valid",
				value: e.data
			};
		}
	};
	Ye.create = (e) => new Ye({
		typeName: v.ZodNaN,
		...S(e)
	});
	var jt = class extends T {
		_parse(e) {
			const { ctx: t } = this._processInputParams(e), a = t.data;
			return this._def.type._parse({
				data: a,
				path: t.path,
				parent: t
			});
		}
		unwrap() {
			return this._def.type;
		}
	}, Lt = class Dc extends T {
		_parse(t) {
			const { status: a, ctx: r } = this._processInputParams(t);
			if (r.common.async) return (async () => {
				const c = await this._def.in._parseAsync({
					data: r.data,
					path: r.path,
					parent: r
				});
				return c.status === "aborted" ? w : c.status === "dirty" ? (a.dirty(), se(c.value)) : this._def.out._parseAsync({
					data: c.value,
					path: r.path,
					parent: r
				});
			})();
			{
				const s = this._def.in._parseSync({
					data: r.data,
					path: r.path,
					parent: r
				});
				return s.status === "aborted" ? w : s.status === "dirty" ? (a.dirty(), {
					status: "dirty",
					value: s.value
				}) : this._def.out._parseSync({
					data: s.value,
					path: r.path,
					parent: r
				});
			}
		}
		static create(t, a) {
			return new Dc({
				in: t,
				out: a,
				typeName: v.ZodPipeline
			});
		}
	}, Te = class extends T {
		_parse(e) {
			const t = this._def.innerType._parse(e), a = (r) => (Y(r) && (r.value = Object.freeze(r.value)), r);
			return he(t) ? t.then((r) => a(r)) : a(t);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	Te.create = (e, t) => new Te({
		innerType: e,
		typeName: v.ZodReadonly,
		...S(t)
	});
	M.lazycreate;
	var v;
	(function(e) {
		e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
	})(v || (v = {}));
	const i = me.create, u = qe.create;
	Ye.create;
	Ue.create;
	const k = Fe.create;
	Ve.create;
	He.create;
	pe.create;
	fe.create;
	We.create;
	const Z = X.create;
	z.create;
	ze.create;
	const g = Q.create, n = M.create;
	M.strictCreate;
	const Zt = ye.create, qt = ld.create;
	_e.create;
	const md = G.create, ne = ud.create;
	Je.create;
	Ke.create;
	hd.create;
	be.create;
	const C = ge.create, x = we.create;
	ve.create;
	ie.create;
	V.create;
	H.create;
	J.create;
	V.createWithPreprocess;
	Lt.create;
	const Ut = n({
		id: i(),
		description: i()
	}), pd = n({
		browser: g(Ut).optional(),
		tab: g(Ut).optional()
	}), fd = x([
		"iab",
		"extension",
		"cdp",
		"mcpapps"
	]), Ft = n({
		family: i().trim().min(1).optional(),
		id: i(),
		name: i(),
		type: fd,
		profileName: i().optional(),
		metadata: n({
			extensionInstanceId: i().optional(),
			codexSessionId: i().optional()
		}).optional()
	}), Xe = Ft.extend({
		apiSupportOverrides: ne(k()).optional(),
		capabilities: pd
	});
	var _d = l({
		PayloadSchema: () => Vt,
		ResultSchema: () => bd,
		commandType: () => Ht,
		create: () => Wt
	});
	const Vt = n({}), bd = g(Ft), Ht = "list_browsers";
	function Wt(e = {}) {
		return new m(Ht, Vt, e);
	}
	var gd = l({
		PayloadSchema: () => zt,
		ResultSchema: () => wd,
		commandType: () => Gt,
		create: () => Jt
	});
	const zt = n({ id: i() }), wd = Xe, Gt = "get_browser";
	function Jt(e) {
		return new m(Gt, zt, e);
	}
	var vd = l({
		PayloadSchema: () => Kt,
		ResultSchema: () => Sd,
		commandType: () => Yt,
		create: () => Xt
	});
	const Kt = n({}), Sd = Xe, Yt = "get_default_browser";
	function Xt(e = {}) {
		return new m(Yt, Kt, e);
	}
	var xd = l({
		PayloadSchema: () => Qt,
		ResultSchema: () => Td,
		commandType: () => ea,
		create: () => ta
	});
	const Qt = n({ name: i() }), Td = i(), ea = "get_documentation";
	function ta(e) {
		return new m(ea, Qt, e);
	}
	var $d = l({
		PayloadSchema: () => aa,
		ResultSchema: () => kd,
		commandType: () => ra,
		create: () => sa
	});
	const aa = n({ browser_id: i() }), kd = i(), ra = "get_browser_documentation";
	function sa(e) {
		return new m(ra, aa, e);
	}
	var Rd = l({
		PayloadSchema: () => ia,
		ResultSchema: () => Cd,
		commandType: () => na,
		create: () => oa
	});
	const ia = n({ url: i().url() }), Cd = Xe, na = "get_browser_for_url";
	function oa(e) {
		return new m(na, ia, e);
	}
	var Id = l({
		PayloadSchema: () => ca,
		ResultSchema: () => Pd,
		commandType: () => da,
		create: () => la
	});
	const ca = n({ browser_id: i() }), Pd = n({ id: i() }), da = "create_tab";
	function la(e) {
		return new m(da, ca, e);
	}
	var Ed = l({
		PayloadSchema: () => ua,
		ResultSchema: () => Ad,
		commandType: () => ha,
		create: () => Qe
	});
	const ua = n({
		browser_id: i(),
		tab_id: i()
	}), Ad = n({
		id: i(),
		title: i().optional(),
		url: i().optional()
	}), ha = "get_tab";
	function Qe(e) {
		return new m(ha, ua, e);
	}
	var Nd = l({
		PayloadSchema: () => ma,
		ResultSchema: () => Dd,
		commandType: () => pa,
		create: () => fa
	});
	const ma = n({
		browser_id: i(),
		tab_id: i()
	}), Dd = n({}), pa = "close_tab";
	function fa(e) {
		return new m(pa, ma, e);
	}
	var Md = l({
		MarkTabStatusSchema: () => ya,
		PayloadSchema: () => _a,
		ResultSchema: () => Od,
		commandType: () => ba,
		create: () => ga
	});
	const ya = x(["handoff", "deliverable"]), _a = n({
		browser_id: i(),
		tab_id: i(),
		status: ya
	}), Od = n({}), ba = "mark_tab";
	function ga(e) {
		return new m(ba, _a, e);
	}
	var Bd = l({
		PayloadSchema: () => va,
		ResultSchema: () => jd,
		commandType: () => wa,
		create: () => Sa
	});
	const wa = "tab_manual_handoff_request", va = n({
		browser_id: i(),
		tab_id: i()
	}), jd = n({});
	function Sa(e) {
		return new m(wa, va, e);
	}
	var Ld = l({
		PayloadSchema: () => xa,
		ResultSchema: () => Zd,
		commandType: () => Ta,
		create: () => qd
	});
	const xa = n({ browser_id: i() }), Zd = n({ display_truncate_max_chars: u().int().positive().optional() }), Ta = "runtime_config";
	function qd(e) {
		return new m(Ta, xa, e);
	}
	var Ud = l({
		PayloadSchema: () => $a,
		ResultSchema: () => Fd,
		commandType: () => ka,
		create: () => Ra
	});
	const $a = n({
		browser_id: i(),
		name: i()
	}), Fd = n({}), ka = "name_session";
	function Ra(e) {
		return new m(ka, $a, e);
	}
	var Vd = l({
		PayloadSchema: () => Ca,
		ResultSchema: () => Hd,
		commandType: () => Ia,
		create: () => Pa
	});
	const Ca = n({ browser_id: i() }), Hd = n({ id: i().optional() }), Ia = "selected_tab";
	function Pa(e) {
		return new m(Ia, Ca, e);
	}
	var Wd = l({
		PayloadSchema: () => Ea,
		ResultSchema: () => zd,
		commandType: () => Aa,
		create: () => Na
	});
	const Ea = n({ browser_id: i() }), zd = n({ tabs: g(n({
		id: i(),
		providerTabId: i().optional(),
		url: i().optional(),
		title: i().optional()
	})) }), Aa = "list_tabs";
	function Na(e) {
		return new m(Aa, Ea, e);
	}
	var Gd = l({
		ContentTypeSchema: () => Da,
		PayloadSchema: () => Ma,
		ResultSchema: () => Jd,
		commandType: () => Oa,
		create: () => Ba
	});
	const Da = x([
		"html",
		"text",
		"domSnapshot"
	]), Ma = n({
		browser_id: i(),
		urls: g(i()),
		content_type: Da,
		timeout_ms: u().int().positive().optional()
	}), Jd = n({ results: g(n({
		url: i(),
		title: i().nullable(),
		content: i().nullable()
	})) }), Oa = "tabs_content";
	function Ba(e) {
		return new m(Oa, Ma, e);
	}
	const Kd = n({
		readOnlyHint: k().optional(),
		untrustedContentHint: k().optional(),
		consequentialHint: k().optional()
	}), Yd = n({
		name: i(),
		call_name: i(),
		registration_id: i(),
		title: i().optional(),
		description: i().optional(),
		input_schema: Z(),
		annotations: Kd.optional(),
		origin: i().optional(),
		pageUrl: i().optional()
	});
	var Xd = l({
		PayloadSchema: () => ja,
		ResultSchema: () => La,
		commandType: () => Za,
		create: () => qa
	});
	const ja = n({
		browser_id: i(),
		tab_id: i()
	}), La = n({ tools: g(Yd) }), Za = "webmcp_list_tools";
	function qa(e) {
		return new m(Za, ja, e);
	}
	var Qd = l({
		PayloadSchema: () => Ua,
		ResultSchema: () => el,
		commandType: () => Fa,
		create: () => Va
	});
	const Ua = n({
		browser_id: i(),
		tab_id: i(),
		tool_name: i(),
		tool_description: i().optional(),
		tool_origin: i().optional(),
		tool_title: i().optional(),
		registration_id: i(),
		input: Z(),
		timeout_ms: u().int().positive().optional()
	}), el = n({ result: Z() }), Fa = "webmcp_invoke_tool";
	function Va(e) {
		return new m(Fa, Ua, e);
	}
	var tl = l({
		PayloadSchema: () => Ha,
		ResultSchema: () => al,
		commandType: () => Wa,
		create: () => za
	});
	const Ha = n({
		browser_id: i(),
		tab_id: i(),
		url: i()
	}), al = n({}), Wa = "navigate_tab_url";
	function za(e) {
		return new m(Wa, Ha, e);
	}
	var rl = l({
		PayloadSchema: () => Ga,
		ResultSchema: () => sl,
		commandType: () => Ja,
		create: () => et
	});
	const Ga = n({
		browser_id: i(),
		tab_id: i()
	}), sl = n({}), Ja = "navigate_tab_back";
	function et(e) {
		return new m(Ja, Ga, e);
	}
	var il = l({
		PayloadSchema: () => Ka,
		ResultSchema: () => nl,
		commandType: () => Ya,
		create: () => tt
	});
	const Ka = n({
		browser_id: i(),
		tab_id: i()
	}), nl = n({}), Ya = "navigate_tab_forward";
	function tt(e) {
		return new m(Ya, Ka, e);
	}
	var ol = l({
		PayloadSchema: () => Xa,
		ResultSchema: () => cl,
		commandType: () => Qa,
		create: () => er
	});
	const Xa = n({
		browser_id: i(),
		tab_id: i()
	}), cl = n({}), Qa = "navigate_tab_reload";
	function er(e) {
		return new m(Qa, Xa, e);
	}
	var dl = l({
		PayloadSchema: () => tr,
		ResultSchema: () => ll,
		commandType: () => ar,
		create: () => rr
	});
	const tr = n({
		browser_id: i(),
		tab_id: i()
	}), ll = n({
		id: i(),
		title: i().optional(),
		url: i().optional()
	}), ar = "browser_user_claim_tab";
	function rr(e) {
		return new m(ar, tr, e);
	}
	var ul = l({
		PayloadSchema: () => sr,
		ResultSchema: () => ir,
		commandType: () => nr,
		create: () => or
	});
	const sr = n({
		browser_id: i(),
		tab_id: i()
	}), ir = qt("kind", [
		n({
			kind: C("library_file"),
			libraryFileId: i().min(1),
			fileId: i().min(1),
			fileName: i(),
			mimeType: i(),
			title: i(),
			url: i()
		}),
		n({
			kind: C("text"),
			text: i(),
			title: i(),
			truncated: k(),
			url: i()
		}),
		n({
			dataBase64: i(),
			fileName: i(),
			kind: C("document"),
			mimeType: i(),
			title: i(),
			url: i()
		})
	]), nr = "browser_user_get_tab_context";
	function or(e) {
		return new m(nr, sr, e);
	}
	var hl = l({
		PayloadSchema: () => cr,
		ResultSchema: () => ml,
		commandType: () => dr,
		create: () => lr
	});
	const cr = n({ browser_id: i() }), ml = n({ tabs: g(n({
		id: i(),
		providerTabId: i().optional(),
		title: i().optional(),
		url: i().optional(),
		lastOpened: i().optional(),
		tabGroup: i().optional()
	})) }), dr = "browser_user_open_tabs";
	function lr(e) {
		return new m(dr, cr, e);
	}
	var pl = l({
		PayloadSchema: () => ur,
		ResultSchema: () => fl,
		commandType: () => hr,
		create: () => mr
	});
	const ur = n({
		browser_id: i(),
		queries: g(i()).min(1).optional(),
		limit: u().int().positive().optional(),
		from: i().optional(),
		to: i().optional()
	}), fl = n({ items: g(n({
		url: i(),
		title: i().optional(),
		dateVisited: i()
	})) }), hr = "browser_user_history";
	function mr(e) {
		return new m(hr, ur, e);
	}
	var yl = l({
		LogLevelSchema: () => $e,
		PayloadSchema: () => pr,
		ResultSchema: () => _l,
		commandType: () => fr,
		create: () => yr
	});
	const $e = x([
		"debug",
		"info",
		"log",
		"warn",
		"error"
	]), pr = n({
		browser_id: i(),
		tab_id: i(),
		filter: i().optional(),
		levels: g($e).optional(),
		limit: u().int().positive().optional()
	}), _l = n({ logs: g(n({
		level: $e,
		message: i(),
		timestamp: i(),
		url: i().optional()
	})) }), fr = "tab_dev_logs";
	function yr(e) {
		return new m(fr, pr, e);
	}
	var bl = l({
		JsDialogTypeSchema: () => _r,
		PayloadSchema: () => gr,
		ResultDialogSchema: () => br,
		ResultSchema: () => gl,
		commandType: () => wr,
		create: () => vr
	});
	const _r = x([
		"alert",
		"beforeunload",
		"confirm",
		"prompt"
	]), br = n({
		id: i(),
		type: _r
	}), gr = n({
		browser_id: i(),
		tab_id: i()
	}), gl = n({ dialog: br.nullable() }), wr = "tab_get_js_dialog";
	function vr(e) {
		return new m(wr, gr, e);
	}
	var wl = l({
		PayloadSchema: () => Sr,
		ResultSchema: () => vl,
		commandType: () => xr,
		create: () => ke
	});
	const Sr = n({
		action: x(["accept", "dismiss"]),
		browser_id: i(),
		dialog_id: i(),
		prompt_text: i().optional(),
		tab_id: i()
	}), vl = n({}), xr = "tab_handle_js_dialog";
	function ke(e) {
		return new m(xr, Sr, e);
	}
	var Sl = l({
		PayloadSchema: () => Tr,
		ResultSchema: () => xl,
		commandType: () => $r,
		create: () => kr
	});
	const Tr = n({
		browser_id: i(),
		tab_id: i()
	}), xl = n({ path: i() }), $r = "tab_content_export";
	function kr(e) {
		return new m($r, Tr, e);
	}
	var Tl = l({
		GSuiteExportTypeSchema: () => Rr,
		PayloadSchema: () => Cr,
		ResultSchema: () => $l,
		commandType: () => Ir,
		create: () => Pr
	});
	const Rr = x([
		"pdf",
		"md",
		"xlsx",
		"csv",
		"docx",
		"pptx"
	]), Cr = n({
		browser_id: i(),
		tab_id: i(),
		format: Rr
	}), $l = n({ path: i() }), Ir = "tab_content_export_gsuite";
	function Pr(e) {
		return new m(Ir, Cr, e);
	}
	var kl = l({
		PayloadSchema: () => Er,
		ResultSchema: () => Rl,
		commandType: () => Ar,
		create: () => Nr
	});
	const Er = n({
		browser_id: i(),
		tab_id: i()
	}), Rl = n({ path: i() }), Ar = "tab_content_export_youtube_transcript";
	function Nr(e) {
		return new m(Ar, Er, e);
	}
	var Cl = l({
		PayloadSchema: () => Dr,
		ResultSchema: () => Il,
		commandType: () => Mr,
		create: () => Or
	});
	const Dr = n({
		browser_id: i(),
		tab_id: i()
	}), Il = n({ text: i() }), Mr = "tab_clipboard_read_text";
	function Or(e) {
		return new m(Mr, Dr, e);
	}
	var Pl = l({
		PayloadSchema: () => Br,
		ResultSchema: () => El,
		commandType: () => jr,
		create: () => Lr
	});
	const Br = n({
		browser_id: i(),
		tab_id: i(),
		text: i()
	}), El = n({}), jr = "tab_clipboard_write_text";
	function Lr(e) {
		return new m(jr, Br, e);
	}
	var Al = l({
		PayloadSchema: () => Zr,
		ResultSchema: () => Ml,
		commandType: () => qr,
		create: () => Ur
	});
	const Dl = n({
		entries: g(n({
			mime_type: i(),
			text: i().optional(),
			base64: i().optional()
		}).superRefine((e, t) => {
			e.text !== void 0 == (e.base64 !== void 0) && t.addIssue({
				code: h.custom,
				message: "Clipboard entries must set exactly one of text or base64"
			});
		})),
		presentation_style: x([
			"unspecified",
			"inline",
			"attachment"
		]).optional()
	}), Zr = n({
		browser_id: i(),
		tab_id: i()
	}), Ml = n({ items: g(Dl) }), qr = "tab_clipboard_read";
	function Ur(e) {
		return new m(qr, Zr, e);
	}
	var Ol = l({
		PayloadSchema: () => Fr,
		ResultSchema: () => Ll,
		commandType: () => Vr,
		create: () => Hr
	});
	const jl = n({
		entries: g(n({
			mime_type: i(),
			text: i().optional(),
			base64: i().optional()
		}).superRefine((e, t) => {
			e.text !== void 0 == (e.base64 !== void 0) && t.addIssue({
				code: h.custom,
				message: "Clipboard entries must set exactly one of text or base64"
			});
		})),
		presentation_style: x([
			"unspecified",
			"inline",
			"attachment"
		]).optional()
	}), Fr = n({
		browser_id: i(),
		tab_id: i(),
		items: g(jl)
	}), Ll = n({}), Vr = "tab_clipboard_write";
	function Hr(e) {
		return new m(Vr, Fr, e);
	}
	var Zl = l({
		PayloadSchema: () => Wr,
		ResultSchema: () => ql,
		commandType: () => zr,
		create: () => Gr
	});
	const Wr = n({
		browser_id: i(),
		tab_id: i(),
		fullPage: k().optional(),
		cropX: u().optional(),
		cropY: u().optional(),
		cropWidth: u().optional(),
		cropHeight: u().optional()
	}), ql = n({ data: i() }), zr = "tab_screenshot";
	function Gr(e) {
		return new m(zr, Wr, e);
	}
	var Ul = l({
		PayloadSchema: () => Jr,
		ResultSchema: () => Fl,
		commandType: () => Kr,
		create: () => Yr
	});
	const Jr = n({
		browser_id: i(),
		tab_id: i(),
		content: x([
			"axState",
			"screenshot",
			"axStateAndScreenshot"
		]),
		disable_diffing: k().optional()
	}), Fl = n({
		state: i().optional(),
		data: i().optional(),
		screenshot_unavailable: i().optional()
	}), Kr = "tab_ax_get_state";
	function Yr(e) {
		return new m(Kr, Jr, e);
	}
	var Vl = l({
		ActionSchema: () => Qr,
		PayloadSchema: () => es,
		ResultSchema: () => Hl,
		commandType: () => ts,
		create: () => as
	});
	const at = md([u(), u()]), K = u().int().nonnegative(), Xr = Zt([K, at]), Qr = qt("kind", [
		n({
			kind: C("paste"),
			element_index: K.nullable(),
			text: i(),
			format: x([
				"text",
				"md",
				"html"
			]).optional()
		}),
		n({
			kind: C("click"),
			target: Xr,
			mouse_button: x([
				"left",
				"right",
				"middle",
				"l",
				"r",
				"m"
			]).optional(),
			click_count: u().int().positive().optional(),
			key: i().optional(),
			duration: u().finite().min(0).max(30).optional()
		}),
		n({
			kind: C("drag"),
			from: at,
			to: at
		}),
		n({
			kind: C("perform_secondary_action"),
			element_index: K,
			action: i()
		}),
		n({
			kind: C("press_key"),
			element_index: K.nullable(),
			key: i(),
			duration: u().finite().min(0).max(30).optional()
		}),
		n({
			kind: C("scroll"),
			target: Xr,
			direction: x([
				"up",
				"down",
				"left",
				"right",
				"u",
				"d",
				"l",
				"r"
			]),
			pages: u().optional()
		}),
		n({
			kind: C("select_text"),
			element_index: K,
			text: i(),
			prefix: i().optional(),
			suffix: i().optional(),
			selection_type: x([
				"text",
				"cursor_before",
				"cursor_after"
			]).optional()
		}),
		n({
			kind: C("set_value"),
			element_index: K,
			value: i()
		}),
		n({
			kind: C("type_text"),
			element_index: K.nullable(),
			text: i()
		})
	]), es = n({
		browser_id: i(),
		tab_id: i(),
		action: Qr
	}), Hl = n({}), ts = "tab_ax_action";
	function as(e) {
		return new m(ts, es, e);
	}
	var Wl = l({
		PayloadSchema: () => rs,
		ResultSchema: () => zl,
		commandType: () => ss,
		create: () => Re
	});
	const rs = n({
		browser_id: i(),
		selector: i().optional(),
		selector_mode: C("all").optional(),
		tab_id: i(),
		script: i(),
		timeout_ms: u().int().positive().optional()
	}), zl = n({ value: Z().optional() }), ss = "playwright_evaluate";
	function Re(e) {
		return new m(ss, rs, e);
	}
	var Gl = l({
		PayloadSchema: () => is,
		ResultSchema: () => Jl,
		commandType: () => ns,
		create: () => os
	});
	const is = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		button: u().optional(),
		keys: g(i()).optional()
	}), Jl = n({}), ns = "cua_click";
	function os(e) {
		return new m(ns, is, e);
	}
	var Kl = l({
		PayloadSchema: () => cs,
		ResultSchema: () => Yl,
		commandType: () => ds,
		create: () => ls
	});
	const cs = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		timeout_ms: u().int().positive().optional()
	}), Yl = n({}), ds = "cua_download_media";
	function ls(e) {
		return new m(ds, cs, e);
	}
	var Xl = l({
		PayloadSchema: () => us,
		ResultSchema: () => Ql,
		commandType: () => hs,
		create: () => ms
	});
	const us = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		keys: g(i()).optional()
	}), Ql = n({}), hs = "cua_double_click";
	function ms(e) {
		return new m(hs, us, e);
	}
	var eu = l({
		PayloadSchema: () => ps,
		ResultSchema: () => tu,
		commandType: () => fs,
		create: () => ys
	});
	const ps = n({
		browser_id: i(),
		tab_id: i(),
		keys: g(i())
	}), tu = n({}), fs = "cua_keypress";
	function ys(e) {
		return new m(fs, ps, e);
	}
	var au = l({
		PayloadSchema: () => _s,
		ResultSchema: () => ru,
		commandType: () => bs,
		create: () => gs
	});
	const _s = n({
		browser_id: i(),
		tab_id: i(),
		path: g(n({
			x: u(),
			y: u()
		})),
		keys: g(i()).optional()
	}), ru = n({}), bs = "cua_drag";
	function gs(e) {
		return new m(bs, _s, e);
	}
	var su = l({
		PayloadSchema: () => ws,
		ResultSchema: () => iu,
		commandType: () => vs,
		create: () => Ss
	});
	const ws = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		keys: g(i()).optional()
	}), iu = n({}), vs = "cua_move";
	function Ss(e) {
		return new m(vs, ws, e);
	}
	var nu = l({
		PayloadSchema: () => xs,
		ResultSchema: () => ou,
		commandType: () => Ts,
		create: () => $s
	});
	const xs = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		scroll_x: u(),
		scroll_y: u(),
		keys: g(i()).optional()
	}), ou = n({}), Ts = "cua_scroll";
	function $s(e) {
		return new m(Ts, xs, e);
	}
	var cu = l({
		PayloadSchema: () => ks,
		ResultSchema: () => du,
		commandType: () => Rs,
		create: () => Cs
	});
	const ks = n({
		browser_id: i(),
		tab_id: i(),
		text: i()
	}), du = n({}), Rs = "cua_type";
	function Cs(e) {
		return new m(Rs, ks, e);
	}
	const te = i({
		required_error: "node_id is required",
		invalid_type_error: "node_id must be a string"
	}).min(1, "node_id must not be empty");
	var lu = l({
		DomNodeIdSchema: () => te,
		PayloadSchema: () => Is,
		ResultSchema: () => uu,
		commandType: () => Ps,
		create: () => Es
	});
	const Is = n({
		browser_id: i(),
		tab_id: i(),
		node_id: te
	}), uu = n({}), Ps = "dom_cua_click";
	function Es(e) {
		return new m(Ps, Is, e);
	}
	var hu = l({
		PayloadSchema: () => As,
		ResultSchema: () => mu,
		commandType: () => Ns,
		create: () => Ds
	});
	const As = n({
		browser_id: i(),
		tab_id: i(),
		node_id: te,
		timeout_ms: u().int().positive().optional()
	}), mu = n({}), Ns = "dom_cua_download_media";
	function Ds(e) {
		return new m(Ns, As, e);
	}
	var pu = l({
		PayloadSchema: () => Ms,
		ResultSchema: () => fu,
		commandType: () => Os,
		create: () => Bs
	});
	const Ms = n({
		browser_id: i(),
		tab_id: i(),
		node_id: te
	}), fu = n({}), Os = "dom_cua_double_click";
	function Bs(e) {
		return new m(Os, Ms, e);
	}
	var yu = l({
		PayloadSchema: () => js,
		ResultSchema: () => _u,
		commandType: () => Ls,
		create: () => Zs
	});
	const js = n({
		browser_id: i(),
		tab_id: i()
	}), _u = Z(), Ls = "dom_cua_get_visible_dom";
	function Zs(e) {
		return new m(Ls, js, e);
	}
	var bu = l({
		PayloadSchema: () => qs,
		ResultSchema: () => gu,
		commandType: () => Us,
		create: () => Fs
	});
	const qs = n({
		browser_id: i(),
		tab_id: i(),
		keys: g(i())
	}), gu = n({}), Us = "dom_cua_keypress";
	function Fs(e) {
		return new m(Us, qs, e);
	}
	var wu = l({
		PayloadSchema: () => Vs,
		ResultSchema: () => vu,
		commandType: () => Hs,
		create: () => Ws
	});
	const Vs = n({
		browser_id: i(),
		tab_id: i(),
		scroll_x: u(),
		scroll_y: u(),
		node_id: te.optional()
	}), vu = n({}), Hs = "dom_cua_scroll";
	function Ws(e) {
		return new m(Hs, Vs, e);
	}
	var Su = l({
		PayloadSchema: () => zs,
		ResultSchema: () => xu,
		commandType: () => Gs,
		create: () => Js
	});
	const zs = n({
		browser_id: i(),
		tab_id: i(),
		text: i()
	}), xu = n({}), Gs = "dom_cua_type";
	function Js(e) {
		return new m(Gs, zs, e);
	}
	var Tu = l({
		PayloadSchema: () => Ks,
		ResultSchema: () => $u,
		commandType: () => Ys,
		create: () => Xs
	});
	const Ks = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		modifiers: g(x([
			"Alt",
			"Control",
			"ControlOrMeta",
			"Meta",
			"Shift"
		])).optional(),
		button: x([
			"left",
			"right",
			"middle"
		]).optional(),
		force: k().optional(),
		timeout_ms: u().int().positive().optional()
	}), $u = n({}), Ys = "playwright_locator_click";
	function Xs(e) {
		return new m(Ys, Ks, e);
	}
	var ku = l({
		PayloadSchema: () => Qs,
		ResultSchema: () => Ru,
		commandType: () => ei,
		create: () => ti
	});
	const Qs = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		modifiers: g(x([
			"Alt",
			"Control",
			"ControlOrMeta",
			"Meta",
			"Shift"
		])).optional(),
		button: x([
			"left",
			"right",
			"middle"
		]).optional(),
		force: k().optional(),
		timeout_ms: u().int().positive().optional()
	}), Ru = n({}), ei = "playwright_locator_dblclick";
	function ti(e) {
		return new m(ei, Qs, e);
	}
	var Cu = l({
		PayloadSchema: () => ai,
		ResultSchema: () => Iu,
		commandType: () => ri,
		create: () => si
	});
	const ai = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		timeout_ms: u().int().positive().optional()
	}), Iu = n({ path: i() }), ri = "playwright_locator_download_media";
	function si(e) {
		return new m(ri, ai, e);
	}
	var Pu = l({
		PayloadSchema: () => ii,
		ResultSchema: () => Eu,
		commandType: () => ni,
		create: () => rt
	});
	const ii = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		value: i(),
		replace: k(),
		timeout_ms: u().int().positive().optional()
	}), Eu = n({}), ni = "playwright_locator_fill";
	function rt(e) {
		return new m(ni, ii, e);
	}
	var Au = l({
		PayloadSchema: () => oi,
		ResultSchema: () => Nu,
		commandType: () => ci,
		create: () => di
	});
	const oi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		value: i(),
		timeout_ms: u().int().positive().optional()
	}), Nu = n({}), ci = "playwright_locator_press";
	function di(e) {
		return new m(ci, oi, e);
	}
	var Du = l({
		PayloadSchema: () => li,
		ResultSchema: () => Mu,
		commandType: () => ui,
		create: () => hi
	});
	const li = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		value: i(),
		timeout_ms: u().int().positive().optional()
	}), Mu = n({}), ui = "playwright_locator_press_sequentially";
	function hi(e) {
		return new m(ui, li, e);
	}
	var Ou = l({
		PayloadSchema: () => mi,
		ResultSchema: () => Bu,
		commandType: () => pi,
		create: () => fi
	});
	const mi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		state: x([
			"attached",
			"detached",
			"visible",
			"hidden"
		]),
		timeout_ms: u().int().positive().optional()
	}), Bu = n({}), pi = "playwright_locator_wait_for";
	function fi(e) {
		return new m(pi, mi, e);
	}
	var ju = l({
		PayloadSchema: () => yi,
		ResultSchema: () => Lu,
		commandType: () => _i,
		create: () => bi
	});
	const yi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i()
	}), Lu = n({ count: u().int() }), _i = "playwright_locator_count";
	function bi(e) {
		return new m(_i, yi, e);
	}
	var Zu = l({
		PayloadSchema: () => wi,
		ResultSchema: () => qu,
		SelectOptionSchema: () => gi,
		commandType: () => vi,
		create: () => Si
	});
	const gi = n({
		value: i().optional(),
		label: i().optional(),
		index: u().int().nonnegative().optional()
	}).superRefine((e, t) => {
		e.value === void 0 && e.label === void 0 && e.index === void 0 && t.addIssue({
			code: h.custom,
			message: "Select option requires value, label, or index"
		});
	}), wi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		selections: g(gi).min(1),
		timeout_ms: u().int().positive().optional()
	}), qu = n({}), vi = "playwright_locator_select_option";
	function Si(e) {
		return new m(vi, wi, e);
	}
	var Uu = l({
		PayloadSchema: () => xi,
		ResultSchema: () => Fu,
		commandType: () => Ti,
		create: () => $i
	});
	const xi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		checked: k(),
		force: k().optional(),
		timeout_ms: u().int().positive().optional()
	}), Fu = n({}), Ti = "playwright_locator_set_checked";
	function $i(e) {
		return new m(Ti, xi, e);
	}
	var Vu = l({
		PayloadSchema: () => ki,
		ResultSchema: () => Hu,
		commandType: () => Ri,
		create: () => Ci
	});
	const ki = n({
		browser_id: i(),
		tab_id: i(),
		selector: i()
	}), Hu = n({ value: k() }), Ri = "playwright_locator_is_visible";
	function Ci(e) {
		return new m(Ri, ki, e);
	}
	var Wu = l({
		PayloadSchema: () => Ii,
		ResultSchema: () => zu,
		commandType: () => Pi,
		create: () => Ei
	});
	const Ii = n({
		browser_id: i(),
		tab_id: i(),
		selector: i()
	}), zu = n({ value: k() }), Pi = "playwright_locator_is_enabled";
	function Ei(e) {
		return new m(Pi, Ii, e);
	}
	var Gu = l({
		PayloadSchema: () => Ai,
		ResultSchema: () => Ju,
		commandType: () => Ni,
		create: () => Di
	});
	const Ai = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		timeout_ms: u().int().positive().optional()
	}), Ju = n({ values: g(i()) }), Ni = "playwright_locator_all_text_contents";
	function Di(e) {
		return new m(Ni, Ai, e);
	}
	var Ku = l({
		PayloadSchema: () => Mi,
		ResultSchema: () => Yu,
		commandType: () => Oi,
		create: () => Bi
	});
	const Mi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		timeout_ms: u().int().positive().optional()
	}), Yu = n({ value: i().nullable() }), Oi = "playwright_locator_text_content";
	function Bi(e) {
		return new m(Oi, Mi, e);
	}
	var Xu = l({
		PayloadSchema: () => ji,
		ResultSchema: () => Qu,
		commandType: () => Li,
		create: () => Zi
	});
	const ji = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		timeout_ms: u().int().positive().optional()
	}), Qu = n({ value: i() }), Li = "playwright_locator_inner_text";
	function Zi(e) {
		return new m(Li, ji, e);
	}
	var eh = l({
		PayloadSchema: () => qi,
		ResultSchema: () => th,
		commandType: () => Ui,
		create: () => Fi
	});
	const qi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		name: i(),
		timeout_ms: u().int().positive().optional()
	}), th = n({ value: i().nullable() }), Ui = "playwright_locator_get_attribute";
	function Fi(e) {
		return new m(Ui, qi, e);
	}
	var ah = l({
		PayloadSchema: () => Vi,
		ResultSchema: () => sh,
		commandType: () => Hi,
		create: () => Wi
	});
	const Vi = n({
		browser_id: i(),
		tab_id: i(),
		selector: i(),
		relative_selector: i().optional(),
		timeout_ms: u().int().positive().optional()
	}), sh = n({ values: g(n({
		attributes: ne(i()),
		inner_text: i(),
		text_content: i().nullable()
	}).nullable()) }), Hi = "playwright_locator_read_all";
	function Wi(e) {
		return new m(Hi, Vi, e);
	}
	var ih = l({
		PayloadSchema: () => zi,
		ResultSchema: () => oh,
		commandType: () => Gi,
		create: () => Ji
	});
	const nh = x([
		"load",
		"domcontentloaded",
		"networkidle",
		"commit"
	]), zi = n({
		browser_id: i(),
		tab_id: i(),
		url: i(),
		wait_until: nh.optional(),
		timeout_ms: u().int().positive().optional()
	}), oh = n({ url: i().optional() }), Gi = "playwright_wait_for_url";
	function Ji(e) {
		return new m(Gi, zi, e);
	}
	var ch = l({
		LoadStateSchema: () => Ki,
		PayloadSchema: () => Yi,
		ResultSchema: () => dh,
		commandType: () => Xi,
		create: () => Qi
	});
	const Ki = x([
		"load",
		"domcontentloaded",
		"networkidle"
	]), Yi = n({
		browser_id: i(),
		tab_id: i(),
		state: Ki.optional(),
		timeout_ms: u().int().positive().optional()
	}), dh = n({}), Xi = "playwright_wait_for_load_state";
	function Qi(e) {
		return new m(Xi, Yi, e);
	}
	var lh = l({
		PayloadSchema: () => en,
		ResultSchema: () => uh,
		commandType: () => tn,
		create: () => an
	});
	const en = n({
		browser_id: i(),
		tab_id: i(),
		timeout_ms: u().int().nonnegative()
	}), uh = n({}), tn = "playwright_wait_for_timeout";
	function an(e) {
		return new m(tn, en, e);
	}
	var hh = l({
		PayloadSchema: () => rn,
		ResultSchema: () => mh,
		commandType: () => sn,
		create: () => nn
	});
	const rn = n({
		browser_id: i(),
		tab_id: i()
	}), mh = n({ dom_snapshot: i() }), sn = "playwright_dom_snapshot";
	function nn(e) {
		return new m(sn, rn, e);
	}
	var ph = l({
		PayloadSchema: () => on,
		ResultSchema: () => bh,
		commandType: () => cn,
		create: () => dn
	});
	const fh = n({
		x: u(),
		y: u(),
		width: u(),
		height: u()
	}), yh = n({
		primary: i().nullable().optional(),
		candidates: g(i()),
		frameSelectors: g(i()).optional()
	}), _h = n({
		nodeId: u().int().positive().nullable().optional(),
		tagName: i(),
		role: i().nullable().optional(),
		visibleText: i().nullable().optional(),
		ariaName: i().nullable().optional(),
		testId: i().nullable().optional(),
		boundingBox: fh.nullable().optional(),
		preview: i(),
		selector: yh
	}), on = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		include_non_interactable: k().optional()
	}), bh = g(_h), cn = "playwright_element_info";
	function dn(e) {
		return new m(cn, on, e);
	}
	var gh = l({
		PayloadSchema: () => ln,
		ResultSchema: () => wh,
		commandType: () => un,
		create: () => hn
	});
	const ln = n({
		browser_id: i(),
		tab_id: i(),
		x: u(),
		y: u(),
		include_non_interactable: k().optional()
	}), wh = n({ data: i() }), un = "playwright_element_screenshot";
	function hn(e) {
		return new m(un, ln, e);
	}
	var vh = l({
		PayloadSchema: () => mn,
		ResultSchema: () => Sh,
		commandType: () => pn,
		create: () => fn
	});
	const mn = n({
		browser_id: i(),
		tab_id: i(),
		timeout_ms: u().int().positive().optional()
	}), Sh = n({ download_id: i() }), pn = "playwright_wait_for_download";
	function fn(e) {
		return new m(pn, mn, e);
	}
	var xh = l({
		PayloadSchema: () => yn,
		ResultSchema: () => Th,
		commandType: () => _n,
		create: () => bn
	});
	const yn = n({
		browser_id: i(),
		tab_id: i(),
		download_id: i(),
		timeout_ms: u().int().positive().optional()
	}), Th = n({ path: i().nullable() }), _n = "playwright_download_path";
	function bn(e) {
		return new m(_n, yn, e);
	}
	var $h = l({
		PayloadSchema: () => gn,
		ResultSchema: () => kh,
		commandType: () => wn,
		create: () => vn
	});
	const gn = n({
		browser_id: i(),
		tab_id: i(),
		timeout_ms: u().int().positive().optional()
	}), kh = n({
		file_chooser_id: i(),
		is_multiple: k()
	}), wn = "playwright_wait_for_file_chooser";
	function vn(e) {
		return new m(wn, gn, e);
	}
	var Rh = l({
		PayloadSchema: () => Sn,
		ResultSchema: () => Ch,
		commandType: () => xn,
		create: () => Tn
	});
	const Sn = n({
		browser_id: i(),
		tab_id: i(),
		file_chooser_id: i(),
		files: g(i()),
		timeout_ms: u().int().positive().optional()
	}), Ch = n({}), xn = "playwright_file_chooser_set_files";
	function Tn(e) {
		return new m(xn, Sn, e);
	}
	var Ih = l({
		AtlasCommand: () => m,
		BrowserUserClaimTab: () => dl,
		BrowserUserGetTabContext: () => ul,
		BrowserUserHistory: () => pl,
		BrowserUserOpenTabs: () => hl,
		CloseTab: () => Nd,
		CreateTab: () => Id,
		CuaClick: () => Gl,
		CuaDoubleClick: () => Xl,
		CuaDownloadMedia: () => Kl,
		CuaDrag: () => au,
		CuaKeypress: () => eu,
		CuaMove: () => su,
		CuaScroll: () => nu,
		CuaType: () => cu,
		DomCuaClick: () => lu,
		DomCuaDoubleClick: () => pu,
		DomCuaDownloadMedia: () => hu,
		DomCuaGetVisibleDom: () => yu,
		DomCuaKeypress: () => bu,
		DomCuaScroll: () => wu,
		DomCuaType: () => Su,
		GetBrowser: () => gd,
		GetBrowserDocumentation: () => $d,
		GetBrowserForUrl: () => Rd,
		GetDefaultBrowser: () => vd,
		GetDocumentation: () => xd,
		GetTab: () => Ed,
		ListBrowsers: () => _d,
		ListTabs: () => Wd,
		ManualHandoff: () => Bd,
		MarkTab: () => Md,
		NameSession: () => Ud,
		NavigateTab: () => tl,
		NavigateTabBack: () => rl,
		NavigateTabForward: () => il,
		NavigateTabReload: () => ol,
		PlaywrightDomSnapshot: () => hh,
		PlaywrightDownloadPath: () => xh,
		PlaywrightElementInfo: () => ph,
		PlaywrightElementScreenshot: () => gh,
		PlaywrightEvaluate: () => Wl,
		PlaywrightFileChooserSetFiles: () => Rh,
		PlaywrightLocatorAllTextContents: () => Gu,
		PlaywrightLocatorClick: () => Tu,
		PlaywrightLocatorCount: () => ju,
		PlaywrightLocatorDblclick: () => ku,
		PlaywrightLocatorDownloadMedia: () => Cu,
		PlaywrightLocatorFill: () => Pu,
		PlaywrightLocatorGetAttribute: () => eh,
		PlaywrightLocatorInnerText: () => Xu,
		PlaywrightLocatorIsEnabled: () => Wu,
		PlaywrightLocatorIsVisible: () => Vu,
		PlaywrightLocatorPress: () => Au,
		PlaywrightLocatorPressSequentially: () => Du,
		PlaywrightLocatorReadAll: () => ah,
		PlaywrightLocatorSelectOption: () => Zu,
		PlaywrightLocatorSetChecked: () => Uu,
		PlaywrightLocatorTextContent: () => Ku,
		PlaywrightLocatorWaitFor: () => Ou,
		PlaywrightWaitForDownload: () => vh,
		PlaywrightWaitForFileChooser: () => $h,
		PlaywrightWaitForLoadState: () => ch,
		PlaywrightWaitForTimeout: () => lh,
		PlaywrightWaitForURL: () => ih,
		RuntimeConfig: () => Ld,
		SelectedTab: () => Vd,
		TabAxAction: () => Vl,
		TabAxGetState: () => Ul,
		TabClipboardRead: () => Al,
		TabClipboardReadText: () => Cl,
		TabClipboardWrite: () => Ol,
		TabClipboardWriteText: () => Pl,
		TabContentExport: () => Sl,
		TabContentExportGSuite: () => Tl,
		TabContentExportYouTubeTranscript: () => kl,
		TabDevLogs: () => yl,
		TabGetJsDialog: () => bl,
		TabHandleJsDialog: () => wl,
		TabScreenshot: () => Zl,
		TabsContent: () => Gd,
		WebMcpInvokeTool: () => Qd,
		WebMcpListTools: () => Xd
	}), $n = class {
		#e;
		#a;
		#t;
		constructor({ createBrowser: e, onBrowserUsed: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async list() {
			return await this.#t.send({ command: Wt() });
		}
		async get(e) {
			if (!e) throw new Error("browsers.get requires a browser id");
			const t = await this.#t.send({ command: Jt({ id: e }) });
			return this.#r(t);
		}
		async getDefault() {
			const e = await this.#t.send({ command: Xt() });
			return this.#r(e);
		}
		async getForUrl(e) {
			const t = await this.#t.send({ command: oa({ url: e }) });
			return this.#r(t);
		}
		#r(e) {
			return this.#a?.(e), this.#e({
				browserInfo: e,
				onBrowserUsed: () => this.#a?.(e),
				transport: this.#t
			});
		}
	}, st = class {
		#e;
		constructor(e) {
			this.#e = e;
		}
		async get(e) {
			return await this.#e.send({ command: ta({ name: e }) });
		}
	}, kn = class {
		constructor({ createBrowser: e, onBrowserUsed: t, transport: a }) {
			if (!a) throw new Error("Agent requires a transport instance");
			this.documentation = new st(a), this.browsers = new $n({
				createBrowser: e,
				onBrowserUsed: t,
				transport: a
			});
		}
	}, Rn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, createTab: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async new() {
			const e = await this.#t.send({ command: la({ browser_id: this.#e }) });
			return this.#a(e);
		}
		async selected() {
			const e = await this.#t.send({ command: Pa({ browser_id: this.#e }) });
			if (e.id) return this.#a(e);
		}
		async list() {
			return (await this.#t.send({ command: Na({ browser_id: this.#e }) })).tabs;
		}
		async content(e) {
			const t = Ba({
				browser_id: this.#e,
				urls: e.urls,
				content_type: e.contentType,
				...e.timeoutMs === void 0 ? {} : { timeout_ms: e.timeoutMs }
			});
			return t.parse(), e.urls.length === 0 ? [] : (await this.#t.send({ command: t })).results;
		}
		async get(e) {
			if (!e) throw new Error("tabs.get requires a tab id");
			const t = await this.#t.send({ command: Qe({
				browser_id: this.#e,
				tab_id: e
			}) });
			return this.#a(t);
		}
	};
	const Ph = () => \`req-\${Date.now().toString(16)}-\${Math.random().toString(16).slice(2)}\`, Ce = (e) => {
		const t = atob(e), a = new Uint8Array(t.length);
		for (let r = 0; r < t.length; r += 1) a[r] = t.charCodeAt(r);
		return a;
	};
	var Cn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, createTab: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async openTabs() {
			return (await this.#t.send({ command: lr({ browser_id: this.#e }) })).tabs;
		}
		async getTabContext(e) {
			const t = await this.#t.send({ command: or({
				browser_id: this.#e,
				tab_id: In(e, "getTabContext")
			}) }), a = ir.parse(t);
			return a.kind !== "document" ? a : {
				data: Ce(a.dataBase64),
				fileName: a.fileName,
				kind: a.kind,
				mimeType: a.mimeType,
				title: a.title,
				url: a.url
			};
		}
		async claimTab(e) {
			const t = In(e, "claimTab"), a = await this.#t.send({ command: rr({
				browser_id: this.#e,
				tab_id: t
			}) });
			return this.#a(a);
		}
	};
	const In = (e, t) => {
		if (typeof e == "string") {
			if (e.length === 0) throw new Error(\`browser.user.\${t} received an empty tab id\`);
			return e;
		}
		if (e && typeof e == "object" && typeof e.id == "string") return e.id;
		throw new Error(\`browser.user.\${t} expects a tab returned by browser.user.openTabs() or a tab id\`);
	}, Pn = Object.getOwnPropertyDescriptor(RegExp.prototype, "source")?.get;
	function Ie(e) {
		if (e == null || typeof e != "object" || !Pn) return !1;
		try {
			return Reflect.apply(Pn, e, []), !0;
		} catch {
			return !1;
		}
	}
	function En(e) {
		if (e == null || typeof e != "object") return !1;
		const t = Object.getPrototypeOf(e);
		return t === null || Object.getPrototypeOf(t) === null;
	}
	function Eh(e, t) {
		if (e == null || typeof e != "object") return !1;
		try {
			return "message" in e && e.message === t;
		} catch {
			return !1;
		}
	}
	function Pe(e, t) {
		const a = e instanceof Error ? e.message : String(e), r = /* @__PURE__ */ new Error(\`\${a}
\${t}\`);
		return e instanceof Error && e.stack && (r.stack = \`\${r.name}: \${r.message}
\${e.stack}\`), r;
	}
	function Ah(e, t) {
		const a = e instanceof Error ? e.message : String(e);
		return /strict mode violation/i.test(a) ? "multiple_matches" : /intercept|receives pointer events/i.test(a) ? "intercepted" : t.matchCount === 0 ? "no_matches" : t.visibleCount === 0 ? "no_visible_match" : "action_failed";
	}
	function Nh(e, t) {
		const a = Nn(t);
		if (typeof e == "string") {
			if (e.length === 0) throw new Error("playwright.evaluate requires a pageFunction");
			return \`const arg = \${a};
return (\${e});\`;
		}
		if (typeof e == "function") return [
			\`const arg = \${a};\`,
			\`const __playwrightEvaluate = (\${e.toString()});\`,
			"return await __playwrightEvaluate(arg);"
		].join(\`
\`);
		throw new Error("playwright.evaluate requires a string or function");
	}
	function An(e, t, a) {
		const r = Nn(t), s = a === "all" ? "locator.evaluateAll" : "locator.evaluate";
		if (typeof e == "string") {
			if (e.length === 0) throw new Error(\`\${s} requires a pageFunction\`);
			return \`const arg = \${r};
return (\${e});\`;
		}
		if (typeof e == "function") return [
			\`const arg = \${r};\`,
			\`const __playwrightEvaluate = (\${e.toString()});\`,
			\`return await __playwrightEvaluate(\${a === "all" ? "elements" : "element"}, arg);\`
		].join(\`
\`);
		throw new Error(\`\${s} requires a string or function\`);
	}
	function Nn(e) {
		if (e === void 0) return "undefined";
		try {
			const t = JSON.stringify(e);
			if (t !== void 0) return t;
		} catch (t) {
			throw Pe(t, "playwright.evaluate arg must be JSON-serializable");
		}
		throw new Error("playwright.evaluate arg must be JSON-serializable");
	}
	function Dn(e, t) {
		const { x: a, y: r } = t;
		if (!Number.isFinite(a) || !Number.isFinite(r)) throw new Error(\`\${e} requires numeric x and y coordinates\`);
		return {
			x: a,
			y: r
		};
	}
	function Dh(e) {
		const t = Array.isArray(e) ? e : [e];
		if (!t.length) throw new Error("locator.selectOption requires at least one value");
		return t.map((a) => {
			if (typeof a == "string") return { value: a };
			if (!a || typeof a != "object") throw new Error("locator.selectOption requires a string or { value?, label?, index? }");
			const r = {};
			if (a.value !== void 0) {
				if (typeof a.value != "string") throw new Error("locator.selectOption value must be a string");
				r.value = a.value;
			}
			if (a.label !== void 0) {
				if (typeof a.label != "string") throw new Error("locator.selectOption label must be a string");
				r.label = a.label;
			}
			if (a.index !== void 0) {
				if (!Number.isInteger(a.index) || a.index < 0) throw new Error("locator.selectOption index must be a non-negative integer");
				r.index = a.index;
			}
			if (r.value === void 0 && r.label === void 0 && r.index === void 0) throw new Error("locator.selectOption requires value, label, or index for each selection");
			return r;
		});
	}
	const Mn = Symbol("browserAuthSelectorDetails");
	var oe = class I {
		#e;
		#a;
		#t;
		#r;
		#s;
		#i;
		#n;
		constructor({ browserId: t, tabId: a, selector: r, transport: s, collectionReadCache: c, collectionReadIndex: o, collectionRelativeSelector: d }) {
			this.#e = t, this.#a = a, this.#t = r, this.#r = s, this.#s = c, this.#i = o, this.#n = d;
		}
		static browserAuthSelector(t) {
			return t[Mn]();
		}
		[Mn]() {
			return {
				browserId: this.#e,
				selector: this.#t,
				tabId: this.#a
			};
		}
		async click(t = {}) {
			try {
				await this.#r.send({
					command: Xs({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						modifiers: t.modifiers,
						button: t.button,
						force: t.force,
						timeout_ms: t.timeoutMs
					}),
					timeoutMs: t.timeoutMs
				}), this.#s?.clear();
			} catch (a) {
				throw await this.actionError(a, "click", \`waiting on click for selector \${this.#t}\`);
			}
		}
		async dblclick(t = {}) {
			try {
				await this.#r.send({
					command: ti({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						modifiers: t.modifiers,
						button: t.button,
						force: t.force,
						timeout_ms: t.timeoutMs
					}),
					timeoutMs: t.timeoutMs
				}), this.#s?.clear();
			} catch (a) {
				throw await this.actionError(a, "dblclick", \`waiting on dblclick for selector \${this.#t}\`);
			}
		}
		async selectOption(t, { timeoutMs: a } = {}) {
			const r = Dh(t);
			try {
				await this.#r.send({
					command: Si({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						selections: r,
						timeout_ms: a
					}),
					timeoutMs: a
				}), this.#s?.clear();
			} catch (s) {
				throw await this.actionError(s, "selectOption", \`locator.selectOption failed for selector \${this.#t}\`);
			}
		}
		async fill(t, { timeoutMs: a } = {}) {
			if (t == null) throw new Error("locator.fill requires a value");
			try {
				await this.#r.send({
					command: rt({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						value: t,
						replace: !0,
						timeout_ms: a
					}),
					timeoutMs: a
				}), this.#s?.clear();
			} catch (r) {
				throw await this.actionError(r, "fill", \`locator.fill failed for selector \${this.#t}\`);
			}
		}
		async type(t, { timeoutMs: a } = {}) {
			if (t == null) throw new Error("locator.type requires a value");
			try {
				await this.#r.send({
					command: rt({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						value: t,
						replace: !1,
						timeout_ms: a
					}),
					timeoutMs: a
				}), this.#s?.clear();
			} catch (r) {
				throw await this.actionError(r, "type", \`locator.type failed for selector \${this.#t}\`);
			}
		}
		async pressSequentially(t, a = {}) {
			if (t == null) throw new Error("locator.pressSequentially requires a value");
			try {
				await this.#r.send({
					command: hi({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						value: t,
						...a.timeoutMs == null ? {} : { timeout_ms: a.timeoutMs }
					}),
					timeoutMs: a.timeoutMs
				}), this.#s?.clear();
			} catch (r) {
				throw await this.actionError(r, "pressSequentially", \`locator.pressSequentially failed for selector \${this.#t}\`);
			}
		}
		async press(t, { timeoutMs: a } = {}) {
			if (t == null) throw new Error("locator.press requires a value");
			try {
				await this.#r.send({
					command: di({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						value: t,
						timeout_ms: a
					}),
					timeoutMs: a
				}), this.#s?.clear();
			} catch (r) {
				throw await this.actionError(r, "press", \`locator.press failed for selector \${this.#t}\`);
			}
		}
		async setChecked(t, a = {}) {
			if (typeof t != "boolean") throw new Error("locator.setChecked requires a boolean");
			try {
				await this.#r.send({
					command: $i({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						checked: t,
						force: a.force,
						timeout_ms: a.timeoutMs
					}),
					timeoutMs: a.timeoutMs
				}), this.#s?.clear();
			} catch (r) {
				throw await this.actionError(r, "setChecked", \`locator.setChecked(\${t}) failed for selector \${this.#t}\`);
			}
		}
		async check(t = {}) {
			await this.setChecked(!0, t);
		}
		async uncheck(t = {}) {
			await this.setChecked(!1, t);
		}
		async waitFor({ state: t, timeoutMs: a }) {
			if (!t) throw new Error("locator.waitFor requires a state");
			try {
				await this.#r.send({
					command: fi({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						state: t,
						timeout_ms: a
					}),
					timeoutMs: a
				});
			} catch (r) {
				throw await this.actionError(r, "waitFor", \`locator.waitFor(\${t}) timed out for selector \${this.#t}\`);
			}
		}
		async count() {
			return (await this.#r.send({ command: bi({
				browser_id: this.#e,
				tab_id: this.#a,
				selector: this.#t
			}) })).count;
		}
		async all() {
			const t = await this.count(), a = new Mh({
				browserId: this.#e,
				tabId: this.#a,
				selector: this.#t,
				transport: this.#r
			});
			return Array.from({ length: t }, (r, s) => new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> nth=\${s}\`,
				transport: this.#r,
				collectionReadCache: a,
				collectionReadIndex: s
			}));
		}
		async textContent({ timeoutMs: t } = {}) {
			const a = await this.cachedRead(t);
			return a ? a.text_content : (await this.#r.send({
				command: Bi({
					browser_id: this.#e,
					tab_id: this.#a,
					selector: this.#t,
					timeout_ms: t
				}),
				timeoutMs: t
			})).value;
		}
		async innerText({ timeoutMs: t } = {}) {
			const a = await this.cachedRead(t);
			return a ? a.inner_text : (await this.#r.send({
				command: Zi({
					browser_id: this.#e,
					tab_id: this.#a,
					selector: this.#t,
					timeout_ms: t
				}),
				timeoutMs: t
			})).value;
		}
		async getAttribute(t, { timeoutMs: a } = {}) {
			if (!t) throw new Error("locator.getAttribute requires a name");
			const r = await this.cachedRead(a);
			return r ? Object.prototype.hasOwnProperty.call(r.attributes, t) ? r.attributes[t] ?? null : null : (await this.#r.send({
				command: Fi({
					browser_id: this.#e,
					tab_id: this.#a,
					selector: this.#t,
					name: t,
					timeout_ms: a
				}),
				timeoutMs: a
			})).value;
		}
		async isVisible() {
			return (await this.#r.send({ command: Ci({
				browser_id: this.#e,
				tab_id: this.#a,
				selector: this.#t
			}) })).value;
		}
		async isEnabled() {
			return (await this.#r.send({ command: Ei({
				browser_id: this.#e,
				tab_id: this.#a,
				selector: this.#t
			}) })).value;
		}
		async allTextContents({ timeoutMs: t } = {}) {
			return (await this.#r.send({
				command: Di({
					browser_id: this.#e,
					tab_id: this.#a,
					selector: this.#t,
					timeout_ms: t
				}),
				timeoutMs: t
			})).values;
		}
		async evaluate(t, a, r) {
			return (await this.#r.send({
				command: Re({
					browser_id: this.#e,
					script: An(t, a),
					selector: this.#t,
					tab_id: this.#a,
					timeout_ms: r?.timeoutMs
				}),
				timeoutMs: r?.timeoutMs
			})).value;
		}
		async evaluateAll(t, a, r) {
			return (await this.#r.send({
				command: Re({
					browser_id: this.#e,
					script: An(t, a, "all"),
					selector: this.#t,
					selector_mode: "all",
					tab_id: this.#a,
					timeout_ms: r?.timeoutMs
				}),
				timeoutMs: r?.timeoutMs
			})).value;
		}
		async actionError(t, a, r) {
			try {
				const s = await this.evaluateAll((c) => ({
					matchCount: c.length,
					visibleCount: c.reduce((o, d) => o + +(d.getClientRects().length > 0), 0),
					matches: c.slice(0, 5).map((o) => ({
						tag: o.tagName.toLowerCase(),
						role: o.getAttribute("role"),
						type: o.getAttribute("type"),
						ariaLabel: o.getAttribute("aria-label"),
						text: o.textContent?.trim().slice(0, 120) ?? "",
						visible: o.getClientRects().length > 0,
						disabled: "disabled" in o && !!o.disabled
					}))
				}), void 0, { timeoutMs: 1e3 });
				return Pe(t, \`\${r}
Locator diagnostics: \${JSON.stringify({
					kind: Ah(t, s),
					action: a,
					locator: this.#t,
					...s,
					truncated: s.matchCount > s.matches.length
				})}\`);
			} catch {
				return Pe(t, r);
			}
		}
		async downloadMedia({ timeoutMs: t = 12e4 } = {}) {
			try {
				const a = await this.#r.send({
					command: si({
						browser_id: this.#e,
						tab_id: this.#a,
						selector: this.#t,
						timeout_ms: t
					}),
					timeoutMs: t
				});
				return this.#s?.clear(), a.path;
			} catch (a) {
				throw await this.actionError(a, "downloadMedia", \`locator.downloadMedia failed for selector \${this.#t}\`);
			}
		}
		locator(t, a = {}) {
			if (!t) throw new Error("locator.locator requires a selector");
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> \${t}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, t) : void 0
			}).filter(a);
		}
		first() {
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> nth=0\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, "nth=0") : void 0
			});
		}
		last() {
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> nth=-1\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, "nth=-1") : void 0
			});
		}
		nth(t) {
			if (typeof t != "number") throw new Error("locator.nth requires a numeric index");
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> nth=\${t}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, \`nth=\${t}\`) : void 0
			});
		}
		and(t) {
			if (!(t instanceof I)) throw new Error("locator.and requires a PlaywrightLocator");
			if (t.#e !== this.#e || t.#a !== this.#a) throw new Error("Locators must belong to the same tab");
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> internal:and=\${JSON.stringify(t.#t)}\`,
				transport: this.#r
			});
		}
		or(t) {
			if (!(t instanceof I)) throw new Error("locator.or requires a PlaywrightLocator");
			if (t.#e !== this.#e || t.#a !== this.#a) throw new Error("Locators must belong to the same tab");
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> internal:or=\${JSON.stringify(t.#t)}\`,
				transport: this.#r
			});
		}
		filter(t = {}) {
			const a = [this.#t];
			if (t.hasText !== void 0 && a.push(\`internal:has-text=\${Ee(t.hasText, !1)}\`), t.hasNotText !== void 0 && a.push(\`internal:has-not-text=\${Ee(t.hasNotText, !1)}\`), t.has !== void 0 && (this.assertCompatibleLocator(t.has, "locator.filter has"), a.push(\`internal:has=\${JSON.stringify(t.has.#t)}\`)), t.hasNot !== void 0 && (this.assertCompatibleLocator(t.hasNot, "locator.filter hasNot"), a.push(\`internal:has-not=\${JSON.stringify(t.hasNot.#t)}\`)), t.visible !== void 0) {
				if (typeof t.visible != "boolean") throw new Error("locator.filter visible must be a boolean");
				a.push(\`visible=\${t.visible}\`);
			}
			const r = a.slice(1).join(" >> "), s = this.#s && this.#i !== void 0 && (!r || this.#n !== void 0);
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: a.join(" >> "),
				transport: this.#r,
				collectionReadCache: s ? this.#s : void 0,
				collectionReadIndex: s ? this.#i : void 0,
				collectionRelativeSelector: s ? q(this.#n, r) : void 0
			});
		}
		getByRole(t, a = {}) {
			const r = nt(t, a);
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> \${r}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, r) : void 0
			});
		}
		getByText(t, a = {}) {
			const r = ot(t, a);
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> \${r}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, r) : void 0
			});
		}
		getByLabel(t, a = {}) {
			const r = ct(t, a);
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> \${r}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, r) : void 0
			});
		}
		getByPlaceholder(t, a = {}) {
			const r = dt(t, a);
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> \${r}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, r) : void 0
			});
		}
		getByTestId(t) {
			const a = lt(t);
			return new I({
				browserId: this.#e,
				tabId: this.#a,
				selector: \`\${this.#t} >> \${a}\`,
				transport: this.#r,
				collectionReadCache: this.#s,
				collectionReadIndex: this.#i,
				collectionRelativeSelector: this.#s && this.#i !== void 0 ? q(this.#n, a) : void 0
			});
		}
		async cachedRead(t) {
			return !this.#s || this.#i === void 0 ? null : await this.#s.read({
				index: this.#i,
				relativeSelector: this.#n,
				timeoutMs: t
			});
		}
		assertCompatibleLocator(t, a) {
			if (!(t instanceof I)) throw new Error(\`\${a} requires a PlaywrightLocator\`);
			if (t.#e !== this.#e || t.#a !== this.#a) throw new Error("Locators must belong to the same tab");
		}
	}, Mh = class {
		#e;
		#a;
		#t;
		#r;
		#s = /* @__PURE__ */ new Map();
		constructor({ browserId: e, tabId: t, selector: a, transport: r }) {
			this.#e = e, this.#a = t, this.#t = a, this.#r = r;
		}
		clear() {
			this.#s.clear();
		}
		async read({ index: e, relativeSelector: t, timeoutMs: a }) {
			const r = t ?? "";
			let s = this.#s.get(r);
			return s || (s = this.#i(t, a).catch((c) => {
				throw this.#s.delete(r), c;
			}), this.#s.set(r, s)), (await s)[e] ?? null;
		}
		async #i(e, t) {
			return (await this.#r.send({
				command: Wi({
					browser_id: this.#e,
					tab_id: this.#a,
					selector: this.#t,
					relative_selector: e,
					timeout_ms: t
				}),
				timeoutMs: t
			})).values;
		}
	};
	function q(e, t) {
		return e ? t ? \`\${e} >> \${t}\` : e : t || void 0;
	}
	function On(e) {
		const t = e;
		return e.unicode || t.unicodeSets ? String(e) : String(e).replace(/(^|[^\\\\])(\\\\\\\\)*(["'\`])/g, "$1$2\\\\\\\\$3").replace(/>>/g, "\\\\>\\\\>");
	}
	function Ee(e, t) {
		return typeof e != "string" ? On(e) : \`\${JSON.stringify(e)}\${t ? "s" : "i"}\`;
	}
	function it(e, t) {
		return typeof e != "string" ? On(e) : \`"\${e.replace(/\\\\/g, "\\\\\\\\").replace(/["]/g, "\\\\\\"")}"\${t ? "s" : "i"}\`;
	}
	function nt(e, t) {
		if (!e) throw new Error("getByRole requires a role");
		const a = [];
		return t.name !== void 0 && a.push(\`[name=\${it(t.name, !!t.exact)}]\`), \`internal:role=\${e}\${a.join("")}\`;
	}
	function ot(e, t) {
		if (typeof e != "string" && !Ie(e)) throw new Error("getByText requires a string or RegExp");
		return \`internal:text=\${Ee(e, !!t.exact)}\`;
	}
	function ct(e, t) {
		if (typeof e != "string" && !Ie(e)) throw new Error("getByLabel requires a string or RegExp");
		return \`internal:label=\${Ee(e, !!t.exact)}\`;
	}
	function dt(e, t) {
		if (typeof e != "string" && !Ie(e)) throw new Error("getByPlaceholder requires a string or RegExp");
		return \`internal:attr=[placeholder=\${it(e, !!t.exact)}]\`;
	}
	function lt(e) {
		if (!e) throw new Error("getByTestId requires a testId");
		return \`internal:testid=[data-testid=\${it(e, !0)}]\`;
	}
	var Bn = class Mc {
		#e;
		#a;
		#t;
		#r;
		constructor({ browserId: t, tabId: a, frameSelector: r, transport: s }) {
			this.#e = t, this.#a = a, this.#t = r, this.#r = s;
		}
		locator(t) {
			if (!t) throw new Error("frameLocator.locator requires a selector");
			const a = \`\${this.#t} >> internal:control=enter-frame >> \${t}\`;
			return new oe({
				browserId: this.#e,
				tabId: this.#a,
				selector: a,
				transport: this.#r
			});
		}
		frameLocator(t) {
			if (!t) throw new Error("frameLocator.frameLocator requires a selector");
			return new Mc({
				browserId: this.#e,
				tabId: this.#a,
				frameSelector: \`\${this.#t} >> internal:control=enter-frame >> \${t}\`,
				transport: this.#r
			});
		}
		getByRole(t, a = {}) {
			return this.locator(nt(t, a));
		}
		getByText(t, a = {}) {
			return this.locator(ot(t, a));
		}
		getByLabel(t, a = {}) {
			return this.locator(ct(t, a));
		}
		getByPlaceholder(t, a = {}) {
			return this.locator(dt(t, a));
		}
		getByTestId(t) {
			return this.locator(lt(t));
		}
	}, jn = class {
		#e;
		#a;
		#t;
		#r;
		constructor({ browserId: e, tabId: t, downloadId: a, transport: r }) {
			this.#e = e, this.#a = t, this.#t = a, this.#r = r;
		}
		async path({ timeoutMs: e } = {}) {
			return (await this.#r.send({
				command: bn({
					browser_id: this.#e,
					tab_id: this.#a,
					download_id: this.#t,
					timeout_ms: e
				}),
				timeoutMs: e
			})).path ?? null;
		}
	}, Ln = class {
		#e;
		#a;
		#t;
		#r;
		#s;
		constructor({ browserId: e, tabId: t, fileChooserId: a, isMultiple: r, transport: s }) {
			this.#e = e, this.#a = t, this.#t = a, this.#r = r, this.#s = s;
		}
		isMultiple() {
			return this.#r;
		}
		async setFiles(e, { timeoutMs: t } = {}) {
			if (e == null) throw new Error("fileChooser.setFiles requires files");
			const a = Array.isArray(e) ? e : [e];
			if (!a.length) throw new Error("fileChooser.setFiles requires at least one file");
			try {
				await this.#s.send({
					command: Tn({
						browser_id: this.#e,
						tab_id: this.#a,
						file_chooser_id: this.#t,
						files: a,
						timeout_ms: t
					}),
					timeoutMs: t
				});
			} catch (r) {
				throw Pe(r, "fileChooser.setFiles failed");
			}
		}
	}, Zn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async goBack() {
			await this.#t.send({ command: et({
				browser_id: this.#e,
				tab_id: this.#a
			}) });
		}
		async goForward() {
			await this.#t.send({ command: tt({
				browser_id: this.#e,
				tab_id: this.#a
			}) });
		}
		async evaluate(e, t, a) {
			return (await this.#t.send({
				command: Re({
					browser_id: this.#e,
					script: Nh(e, t),
					tab_id: this.#a,
					timeout_ms: a?.timeoutMs
				}),
				timeoutMs: a?.timeoutMs
			})).value;
		}
		locator(e) {
			if (!e) throw new Error("playwright.locator requires a selector");
			return new oe({
				browserId: this.#e,
				tabId: this.#a,
				selector: e,
				transport: this.#t
			});
		}
		getByRole(e, t = {}) {
			return this.locator(nt(e, t));
		}
		getByText(e, t = {}) {
			return this.locator(ot(e, t));
		}
		getByLabel(e, t = {}) {
			return this.locator(ct(e, t));
		}
		getByPlaceholder(e, t = {}) {
			return this.locator(dt(e, t));
		}
		getByTestId(e) {
			return this.locator(lt(e));
		}
		frameLocator(e) {
			if (!e) throw new Error("playwright.frameLocator requires a selector");
			return new Bn({
				browserId: this.#e,
				tabId: this.#a,
				frameSelector: e,
				transport: this.#t
			});
		}
		async waitForURL(e, t = {}) {
			if (!e) throw new Error("playwright.waitForURL requires a url");
			await this.#t.send({
				command: Ji({
					browser_id: this.#e,
					tab_id: this.#a,
					url: e,
					wait_until: t.waitUntil,
					timeout_ms: t.timeoutMs
				}),
				timeoutMs: t.timeoutMs
			});
		}
		async waitForLoadState(e = {}) {
			await this.#t.send({
				command: Qi({
					browser_id: this.#e,
					tab_id: this.#a,
					state: e.state,
					timeout_ms: e.timeoutMs
				}),
				timeoutMs: e.timeoutMs
			});
		}
		async waitForTimeout(e) {
			if (!Number.isInteger(e) || e < 0) throw new Error("playwright.waitForTimeout requires a non-negative integer");
			await this.#t.send({
				command: an({
					browser_id: this.#e,
					tab_id: this.#a,
					timeout_ms: e
				}),
				timeoutMs: e + 2e3
			});
		}
		waitForEvent(e, t = {}) {
			const a = this.#r(e, t);
			return a.catch(() => {}), a;
		}
		async #r(e, t) {
			if (e === "download") {
				const a = t.timeoutMs ?? 12e4, r = await this.#t.send({
					command: fn({
						browser_id: this.#e,
						tab_id: this.#a,
						timeout_ms: a
					}),
					timeoutMs: a
				});
				return new jn({
					browserId: this.#e,
					tabId: this.#a,
					downloadId: r.download_id,
					transport: this.#t
				});
			}
			if (e === "filechooser") {
				const a = await this.#t.send({
					command: vn({
						browser_id: this.#e,
						tab_id: this.#a,
						timeout_ms: t.timeoutMs
					}),
					timeoutMs: t.timeoutMs
				});
				return new Ln({
					browserId: this.#e,
					tabId: this.#a,
					fileChooserId: a.file_chooser_id,
					isMultiple: a.is_multiple,
					transport: this.#t
				});
			}
			throw new Error("playwright.waitForEvent only supports 'download' and 'filechooser'");
		}
		async expectNavigation(e, t = {}) {
			const a = t.url ? this.waitForURL(t.url, {
				timeoutMs: t.timeoutMs,
				waitUntil: t.waitUntil
			}) : this.waitForLoadState({
				timeoutMs: t.timeoutMs,
				state: t.waitUntil
			}), r = Promise.resolve().then(e), [s] = await Promise.all([r, a]);
			return s;
		}
		async elementInfo(e) {
			const t = Dn("playwright.elementInfo", e);
			return await this.#t.send({ command: dn({
				browser_id: this.#e,
				tab_id: this.#a,
				x: t.x,
				y: t.y,
				include_non_interactable: e.includeNonInteractable
			}) });
		}
		async elementScreenshot(e) {
			const t = Dn("playwright.elementScreenshot", e);
			return Ce((await this.#t.send({ command: hn({
				browser_id: this.#e,
				tab_id: this.#a,
				x: t.x,
				y: t.y,
				include_non_interactable: e.includeNonInteractable
			}) })).data);
		}
		async domSnapshot() {
			return (await this.#t.send({ command: nn({
				browser_id: this.#e,
				tab_id: this.#a
			}) })).dom_snapshot;
		}
	}, qn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async get_visible_dom() {
			return this.#t.send({ command: Zs({
				browser_id: this.#e,
				tab_id: this.#a
			}) });
		}
		async click(e) {
			const t = ut(e?.node_id, "dom_cua.click");
			await this.#t.send({ command: Es({
				browser_id: this.#e,
				tab_id: this.#a,
				node_id: t
			}) });
		}
		async double_click(e) {
			const t = ut(e?.node_id, "dom_cua.double_click");
			await this.#t.send({ command: Bs({
				browser_id: this.#e,
				tab_id: this.#a,
				node_id: t
			}) });
		}
		async scroll({ node_id: e, x: t, y: a }) {
			if (typeof t != "number" || typeof a != "number") throw new Error("dom_cua.scroll requires x and y numbers");
			const r = e === void 0 ? void 0 : Un(e, "dom_cua.scroll");
			await this.#t.send({ command: Ws({
				browser_id: this.#e,
				tab_id: this.#a,
				node_id: r,
				scroll_x: t,
				scroll_y: a
			}) });
		}
		async type({ text: e }) {
			if (typeof e != "string") throw new Error("dom_cua.type requires text");
			await this.#t.send({ command: Js({
				browser_id: this.#e,
				tab_id: this.#a,
				text: e
			}) });
		}
		async keypress(e) {
			if (!Array.isArray(e?.keys) || e.keys.length === 0) throw new Error("dom_cua.keypress requires a non-empty keys array");
			await this.#t.send({ command: Fs({
				browser_id: this.#e,
				tab_id: this.#a,
				keys: e.keys
			}) });
		}
		async downloadMedia(e) {
			const t = ut(e?.node_id, "dom_cua.downloadMedia");
			await this.#t.send({
				command: Ds({
					browser_id: this.#e,
					tab_id: this.#a,
					node_id: t,
					timeout_ms: e.timeoutMs
				}),
				timeoutMs: e.timeoutMs
			});
		}
	};
	function ut(e, t) {
		if (e === void 0) throw new Error(\`\${t} requires a node_id\`);
		return Un(e, t);
	}
	function Un(e, t) {
		const a = te.safeParse(e);
		if (!a.success) throw new Error(\`\${t} \${a.error.issues[0]?.message ?? "has an invalid node_id"}\`);
		return a.data;
	}
	var Fn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async click(e) {
			if (typeof e?.x != "number" || typeof e?.y != "number") throw new Error("cua.click requires x and y");
			await this.#t.send({ command: os({
				browser_id: this.#e,
				tab_id: this.#a,
				x: e.x,
				y: e.y,
				button: e.button,
				keys: e.keypress
			}) });
		}
		async scroll(e) {
			if (typeof e?.x != "number" || typeof e?.y != "number" || typeof e?.scrollX != "number" || typeof e?.scrollY != "number") throw new Error("cua.scroll requires x, y, scrollX, and scrollY");
			await this.#t.send({ command: $s({
				browser_id: this.#e,
				tab_id: this.#a,
				x: e.x,
				y: e.y,
				scroll_x: e.scrollX,
				scroll_y: e.scrollY,
				keys: e.keypress
			}) });
		}
		async double_click(e) {
			if (typeof e?.x != "number" || typeof e?.y != "number") throw new Error("cua.double_click requires x and y");
			await this.#t.send({ command: ms({
				browser_id: this.#e,
				tab_id: this.#a,
				x: e.x,
				y: e.y,
				keys: e.keypress
			}) });
		}
		async type(e) {
			if (typeof e?.text != "string") throw new Error("cua.type requires text");
			await this.#t.send({ command: Cs({
				browser_id: this.#e,
				tab_id: this.#a,
				text: e.text
			}) });
		}
		async keypress(e) {
			if (!Array.isArray(e?.keys) || e.keys.length === 0) throw new Error("cua.keypress requires a non-empty keys array");
			await this.#t.send({ command: ys({
				browser_id: this.#e,
				tab_id: this.#a,
				keys: e.keys
			}) });
		}
		async drag(e) {
			if (!Array.isArray(e?.path) || e.path.length === 0 || e.path.some((t) => typeof t?.x != "number" || typeof t?.y != "number")) throw new Error("cua.drag requires a non-empty path of {x, y} points");
			await this.#t.send({ command: gs({
				browser_id: this.#e,
				tab_id: this.#a,
				path: e.path,
				keys: e.keys
			}) });
		}
		async move(e) {
			if (typeof e?.x != "number" || typeof e?.y != "number") throw new Error("cua.move requires x and y");
			await this.#t.send({ command: Ss({
				browser_id: this.#e,
				tab_id: this.#a,
				x: e.x,
				y: e.y,
				keys: e.keys
			}) });
		}
		async downloadMedia(e) {
			if (typeof e?.x != "number" || typeof e?.y != "number") throw new Error("cua.downloadMedia requires x and y");
			await this.#t.send({
				command: ls({
					browser_id: this.#e,
					tab_id: this.#a,
					x: e.x,
					y: e.y,
					timeout_ms: e.timeoutMs
				}),
				timeoutMs: e.timeoutMs
			});
		}
	}, Vn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async get(e = "state", t) {
			const a = await this.#r(e, t);
			switch (a.mode) {
				case "state": return a.state;
				case "screenshot": return a.screenshot;
				case "both": return a.screenshot === void 0 ? { state: a.state } : {
					state: a.state,
					screenshot: a.screenshot
				};
			}
		}
		async write(e = "state", t) {
			const a = await this.#r(e, t);
			a.mode !== "screenshot" && await this.#t.display(a.state), a.mode !== "state" && a.screenshot !== void 0 && await this.#t.display(a.screenshot);
		}
		async click(e, t) {
			await this.#s({
				kind: "click",
				target: e,
				...t?.mouseButton === void 0 ? {} : { mouse_button: t.mouseButton },
				...t?.clickCount === void 0 ? {} : { click_count: t.clickCount },
				...t?.key === void 0 ? {} : { key: t.key },
				...t?.duration === void 0 ? {} : { duration: t.duration }
			});
		}
		async drag(e, t) {
			await this.#s({
				kind: "drag",
				from: e,
				to: t
			});
		}
		async paste(e, t, a) {
			await this.#s({
				kind: "paste",
				element_index: e,
				text: t,
				format: a?.format
			});
		}
		async performSecondaryAction(e, t) {
			await this.#s({
				kind: "perform_secondary_action",
				element_index: e,
				action: t
			});
		}
		async pressKey(e, t, a) {
			await this.#s({
				kind: "press_key",
				element_index: e,
				key: t,
				...a?.duration === void 0 ? {} : { duration: a.duration }
			});
		}
		async scroll(e, t, a) {
			await this.#s({
				kind: "scroll",
				target: e,
				direction: t,
				...a === void 0 ? {} : { pages: a }
			});
		}
		async selectText(e, t, a) {
			await this.#s({
				kind: "select_text",
				element_index: e,
				text: t,
				...a?.prefix === void 0 ? {} : { prefix: a.prefix },
				...a?.suffix === void 0 ? {} : { suffix: a.suffix },
				...a?.selectionType === void 0 ? {} : { selection_type: a.selectionType }
			});
		}
		async setValue(e, t) {
			await this.#s({
				kind: "set_value",
				element_index: e,
				value: t
			});
		}
		async typeText(e, t) {
			await this.#s({
				kind: "type_text",
				element_index: e,
				text: t
			});
		}
		async #r(e, t) {
			const a = await this.#t.send({ command: Yr({
				browser_id: this.#e,
				tab_id: this.#a,
				content: e === "state" ? "axState" : e === "screenshot" ? "screenshot" : "axStateAndScreenshot",
				...t?.disableDiffing === void 0 ? {} : { disable_diffing: t.disableDiffing }
			}) });
			if (e === "state") {
				if (typeof a.state != "string") throw new Error("ax capture returned no accessibility state");
				return {
					mode: e,
					state: a.state
				};
			}
			if (typeof a.data != "string") {
				if (e === "both" && typeof a.screenshot_unavailable == "string" && typeof a.state == "string") return {
					mode: e,
					state: a.state
				};
				throw new Error("ax capture returned no screenshot data");
			}
			const r = Ce(a.data);
			if (e === "screenshot") return {
				mode: e,
				screenshot: r
			};
			if (typeof a.state != "string") throw new Error("ax capture returned no accessibility state");
			return {
				mode: e,
				state: a.state,
				screenshot: r
			};
		}
		async #s(e) {
			await this.#t.send({ command: as({
				browser_id: this.#e,
				tab_id: this.#a,
				action: e
			}) });
		}
	}, Hn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async export() {
			return (await this.#t.send({ command: kr({
				browser_id: this.#e,
				tab_id: this.#a
			}) })).path;
		}
		async exportGsuite(e) {
			return (await this.#t.send({ command: Pr({
				browser_id: this.#e,
				tab_id: this.#a,
				format: e
			}) })).path;
		}
		async exportYouTubeTranscript() {
			return (await this.#t.send({ command: Nr({
				browser_id: this.#e,
				tab_id: this.#a
			}) })).path;
		}
	}, Wn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async readText() {
			return (await this.#t.send({ command: Or({
				browser_id: this.#e,
				tab_id: this.#a
			}) })).text;
		}
		async writeText(e) {
			if (e == null) throw new Error("tab.clipboard.writeText requires text");
			await this.#t.send({ command: Lr({
				browser_id: this.#e,
				tab_id: this.#a,
				text: e
			}) });
		}
		async read() {
			return (await this.#t.send({ command: Ur({
				browser_id: this.#e,
				tab_id: this.#a
			}) })).items.map((e) => ({
				entries: e.entries.map((t) => ({
					mimeType: t.mime_type,
					text: t.text,
					base64: t.base64
				})),
				presentationStyle: e.presentation_style
			}));
		}
		async write(e) {
			if (!Array.isArray(e) || e.length === 0) throw new Error("tab.clipboard.write requires at least one clipboard item");
			await this.#t.send({ command: Hr({
				browser_id: this.#e,
				tab_id: this.#a,
				items: e.map((t) => ({
					presentation_style: t.presentationStyle,
					entries: t.entries.map((a) => ({
						mime_type: a.mimeType,
						text: a.text,
						base64: a.base64
					}))
				}))
			}) });
		}
	}, zn = class {
		#e;
		#a;
		#t;
		constructor({ browserId: e, tabId: t, transport: a }) {
			this.#e = e, this.#a = t, this.#t = a;
		}
		async logs(e = {}) {
			const t = Oh(e.filter), a = Bh(e.levels), r = jh(e.limit), s = {
				browser_id: this.#e,
				tab_id: this.#a,
				...t !== void 0 ? { filter: t } : {},
				...a !== void 0 ? { levels: a } : {},
				...r !== void 0 ? { limit: r } : {}
			};
			return (await this.#t.send({ command: yr(s) })).logs;
		}
	};
	const Oh = (e) => {
		if (e != null) {
			if (typeof e != "string") throw new Error("tab.dev.logs received an invalid filter");
			return e;
		}
	}, Bh = (e) => {
		if (e != null) {
			if (!Array.isArray(e) || e.length === 0) throw new Error("tab.dev.logs received invalid levels");
			return e.map((t) => {
				if (t === "warning") return "warn";
				if ($e.options.includes(t)) return t;
				throw new Error(\`tab.dev.logs received invalid level "\${String(t)}"\`);
			});
		}
	}, jh = (e) => {
		if (e != null) {
			if (!Number.isInteger(e) || e <= 0) throw new Error("tab.dev.logs received an invalid limit");
			return e;
		}
	};
	var ht = class {
		constructor(e, t, a, r) {
			this.transport = e, this.browserId = t, this.documentationApi = a, this.info = r;
		}
		get id() {
			return this.info.id;
		}
		async documentation() {
			return await this.documentationApi.get(\`capabilities/browser/\${this.id}\`);
		}
	}, ce = class {
		constructor(e, t, a, r, s) {
			this.transport = e, this.browserId = t, this.tabId = a, this.documentationApi = r, this.info = s;
		}
		get id() {
			return this.info.id;
		}
		async documentation() {
			return await this.documentationApi.get(\`capabilities/tab/\${this.id}\`);
		}
	};
	function mt({ capability: e, info: t, internalOnly: a }) {
		return {
			capability: e,
			create: (r) => new e({
				...r,
				info: t
			}),
			id: t.id,
			info: t,
			...a == null ? {} : { internalOnly: a }
		};
	}
	function de({ capability: e, info: t, internalOnly: a }) {
		return {
			capability: e,
			create: (r) => new e({
				...r,
				info: t
			}),
			id: t.id,
			info: t,
			...a == null ? {} : { internalOnly: a }
		};
	}
	var Gn = class {
		#e;
		constructor(e) {
			this.#e = e;
		}
		async get(e) {
			const t = this.#e[e];
			if (!t) throw new Error(\`Capability is not available: \${e}\`);
			return t;
		}
		async list() {
			return Object.values(this.#e).map((e) => e.info);
		}
	};
	const Zh = n({ reason: x([
		"captcha_failed",
		"access_denied",
		"challenge_loop",
		"unexpected_bot_error"
	]) });
	var qh = l({
		PayloadSchema: () => pt,
		ResultSchema: () => Kn,
		commandType: () => Jn,
		create: () => Yn
	});
	const Jn = "tab_bot_detection_report", pt = Zh.extend({
		browser_id: i(),
		tab_id: i()
	}), Kn = n({
		status: C("reported"),
		hostname: i().nullable()
	});
	function Yn(e) {
		return new m(Jn, pt, e);
	}
	var Uh = l({ Report: () => qh });
	const Fh = {
		id: "botDetection",
		description: "Use when the current tab is blocked by bot detection, a failed CAPTCHA, a hard access denial, or a repeated challenge/login loop."
	};
	var Xn = class extends ce {
		constructor({ browserId: e, documentation: t, info: a, tabId: r, transport: s }) {
			super(s, e, r, t, a);
		}
		async report(e) {
			const t = pt.parse({
				...e,
				browser_id: this.browserId,
				tab_id: this.tabId
			}), a = await this.transport.send({ command: Yn(t) });
			return Kn.parse(a);
		}
	};
	const Qn = de({
		capability: Xn,
		info: Fh
	}), eo = n({
		session_id: i().min(1).optional(),
		target_id: i().min(1).optional()
	}).refine((e) => e.session_id == null != (e.target_id == null), "CDP target must provide exactly one of session_id or target_id."), Vh = n({
		extensionId: i().optional(),
		sessionId: i().optional(),
		tabId: u().int().optional(),
		targetId: i().optional()
	}), Hh = n({
		sequence: u().int().positive(),
		source: Vh,
		method: i().min(1),
		params: ne(i(), Z()).optional()
	});
	var Wh = l({
		PayloadSchema: () => ao,
		ResultSchema: () => ro,
		commandType: () => to,
		create: () => so
	});
	const to = "tab_cdp_call", ao = n({
		browser_id: i(),
		tab_id: i(),
		method: i().min(1),
		params: ne(i(), Z()).optional(),
		target: eo.optional(),
		timeout_ms: u().int().positive().optional()
	}), ro = Z();
	function so(e) {
		return new m(to, ao, e);
	}
	var zh = l({
		PayloadSchema: () => no,
		ResultSchema: () => oo,
		commandType: () => io,
		create: () => co
	});
	const io = "tab_cdp_events", no = n({
		after_sequence: u().int().nonnegative().optional(),
		browser_id: i(),
		limit: u().int().positive().max(1e3).optional(),
		methods: g(i().min(1)).min(1).optional(),
		tab_id: i(),
		target: eo.optional(),
		timeout_ms: u().int().nonnegative().optional()
	}), oo = n({
		cursor: u().int().nonnegative(),
		events: g(Hh),
		hasMore: k(),
		truncated: k()
	});
	function co(e) {
		return new m(io, no, e);
	}
	var Gh = l({
		Call: () => Wh,
		Events: () => zh
	});
	const Jh = {
		id: "cdp",
		description: "Send raw Chrome DevTools Protocol commands and read debugger events through a supported tab for developer use cases."
	}, Kh = 2e3;
	var lo = class extends ce {
		constructor({ browserId: e, documentation: t, info: a, tabId: r, transport: s }) {
			super(s, e, r, t, a);
		}
		async send(e, t, a) {
			const r = await this.transport.send({
				command: so({
					browser_id: this.browserId,
					method: e,
					params: t,
					tab_id: this.tabId,
					target: ho(a?.target),
					timeout_ms: a?.timeoutMs
				}),
				timeoutMs: a?.timeoutMs
			});
			return ro.parse(r);
		}
		async readEvents(e) {
			const t = await this.transport.send({
				command: co({
					after_sequence: e?.afterSequence,
					browser_id: this.browserId,
					limit: e?.limit,
					methods: e?.methods,
					tab_id: this.tabId,
					target: ho(e?.target),
					timeout_ms: e?.timeoutMs
				}),
				timeoutMs: Yh(e?.timeoutMs)
			});
			return oo.parse(t);
		}
	};
	const uo = de({
		capability: lo,
		info: Jh
	});
	function ho(e) {
		if (e != null) return {
			session_id: e.sessionId,
			target_id: e.targetId
		};
	}
	function Yh(e) {
		return e != null && e > 0 ? e + Kh : void 0;
	}
	const mo = /^[A-Za-z0-9_-]{1,48}$/, po = new Set([
		"__proto__",
		"constructor",
		"prototype"
	]), Xh = n({
		id: i().regex(mo).refine((e) => !po.has(e)),
		label: i(),
		type: i().min(1),
		autocomplete: i().nullable().optional(),
		required: k(),
		selector: i()
	}), Qh = n({
		selector: i(),
		action: x(["click", "press_enter"])
	}), em = n({
		id: i().regex(mo).refine((e) => !po.has(e)),
		label: i().trim().min(1).max(120),
		selector: i().optional(),
		field_ids: g(i()).max(6).optional()
	}).refine((e) => e.selector != null != (e.field_ids?.length ?? 0) > 0, "browser auth options require either a selector or credential fields"), tm = n({
		origin: i(),
		fields: g(Xh).max(6),
		options: g(em).min(2).max(10).optional(),
		qr_code: C(!0).optional(),
		submit: Qh.optional(),
		otpHandle: i().min(1).max(16384).optional()
	}).refine((e) => e.fields.length > 0 || e.options != null || e.qr_code === !0, "browser auth requests require credential fields, sign-in options, or a QR code");
	var am = l({
		PayloadSchema: () => yo,
		ResultSchema: () => go,
		SubmissionAttemptEventSchema: () => _o,
		SubmissionDiagnosticsSchema: () => bo,
		SubmissionRejectionSchema: () => ft,
		commandType: () => fo,
		create: () => wo
	});
	const fo = "tab_browser_auth_handoff", yo = tm.and(n({
		browser_id: i(),
		tab_id: i()
	})), ft = n({
		outcome: x(["origin_changed", "submission_failed"]),
		reason: x([
			"request_url_invalid",
			"request_scheme",
			"request_origin",
			"paused_iframe",
			"iframe_origin",
			"child_frame_origin",
			"other"
		]),
		request_class: x([
			"main_document",
			"background",
			"other"
		]),
		submission_phase: x([
			"pending",
			"settled",
			"not_applicable"
		])
	}), _o = n({
		sequence: u().int().min(0).max(65535),
		kind: x([
			"prompt_completed",
			"field_fill_started",
			"field_fill_completed",
			"field_fill_uncertain",
			"url_changed",
			"document_changed",
			"frame_changed",
			"reinspection_started",
			"reinspection_succeeded",
			"reinspection_failed",
			"site_request",
			"site_navigation",
			"site_submission_verified",
			"submit_started",
			"attempt_completed"
		]),
		phase: x([
			"prompt",
			"filling",
			"before_submit",
			"submitting",
			"settled"
		]),
		field_index: u().int().min(0).max(63).optional(),
		reinspection: u().int().min(1).max(3).optional(),
		outcome: x([
			"submitted",
			"unavailable",
			"origin_changed",
			"page_changed",
			"locator_invalid",
			"submission_failed",
			"prompt_changed"
		]).optional(),
		request_class: x(["main_document", "background"]).optional(),
		method: x([
			"get",
			"post",
			"other"
		]).optional(),
		origin_relation: x([
			"same",
			"cross",
			"other"
		]).optional()
	}), bo = n({
		schema_version: C(1),
		request_id: i().uuid(),
		submission_mode: x(["ordinary", "private"]),
		first_rejection: ft.optional(),
		terminal_rejection: ft.optional(),
		attempt_events: g(_o).max(64).optional(),
		dropped_attempt_events: u().int().min(0).max(65535).optional()
	}), go = n({
		status: x([
			"submitted",
			"declined",
			"cancelled",
			"unavailable",
			"expired",
			"origin_changed",
			"page_changed",
			"locator_invalid",
			"submission_failed"
		]),
		locator_error: n({
			field_id: i(),
			reason: C("not_user_visible")
		}).optional(),
		selected_option: i().optional(),
		reason: C("user_took_over").optional(),
		submission_diagnostics: bo.optional()
	});
	function wo(e) {
		return new m(fo, yo, e);
	}
	var rm = l({ Handoff: () => am });
	const sm = {
		id: "browserAuth",
		description: "MUST read its documentation before the first interaction with any authentication or sign-in flow required for the task. Covers method selection, secure user-provided credentials, and post-authentication verification and recovery."
	};
	var vo = class extends ce {
		constructor({ browserId: e, documentation: t, info: a, tabId: r, transport: s }) {
			super(s, e, r, t, a);
		}
		async request(e) {
			const a = wo({
				...im(e, {
					browserId: this.browserId,
					tabId: this.tabId
				}),
				browser_id: this.browserId,
				tab_id: this.tabId
			});
			a.parse();
			const r = await this.transport.send({ command: a });
			return go.parse(r);
		}
	};
	const So = de({
		capability: vo,
		info: sm
	});
	function im(e, t) {
		const a = {
			origin: e.origin,
			otpHandle: e.otpHandle,
			fields: e.fields.map((r) => {
				const s = {
					id: r.id,
					label: r.label,
					type: r.type,
					required: r.required,
					selector: yt(r.selector, t)
				};
				return r.autocomplete !== void 0 && (s.autocomplete = r.autocomplete), s;
			}),
			...e.qr_code === !0 ? { qr_code: !0 } : {}
		};
		return e.options != null && (a.options = e.options.map((r) => ({
			id: r.id,
			label: r.label,
			...r.field_ids == null ? {} : { field_ids: r.field_ids },
			...r.selector == null ? {} : { selector: yt(r.selector, t) }
		}))), e.submit != null && (a.submit = {
			action: e.submit.action,
			selector: yt(e.submit.selector, t)
		}), a;
	}
	function yt(e, t) {
		if (typeof e == "string") return e;
		if (!(e instanceof oe)) throw new Error("browserAuth selector must be a string or PlaywrightLocator");
		const a = oe.browserAuthSelector(e);
		if (a.browserId !== t.browserId || a.tabId !== t.tabId) throw new Error("browserAuth selector locator must belong to this tab");
		return a.selector;
	}
	const xo = x([
		"font",
		"image",
		"script",
		"stylesheet",
		"video",
		"other"
	]), To = x([
		"font",
		"image",
		"stylesheet",
		"video"
	]), nm = n({
		kind: x([
			"attribute",
			"computedStyle",
			"resource"
		]),
		nodeId: u().int().positive().optional(),
		property: i().optional()
	}), om = n({
		id: i(),
		kind: xo,
		name: i(),
		sources: g(nm),
		url: i()
	}), cm = n({
		id: i(),
		markup: i(),
		name: i()
	}), dm = n({
		assets: g(om),
		id: i(),
		inlineSvgs: g(cm),
		pageUrl: i().nullable(),
		summary: n({
			byKind: ne(xo, u().int().nonnegative()),
			inlineSvgCount: u().int().nonnegative(),
			totalCount: u().int().nonnegative()
		})
	}), lm = n({
		assetIds: g(i()).optional(),
		inventoryId: i(),
		kinds: g(To).optional()
	}), um = n({
		contentType: i().nullable(),
		id: i(),
		kind: To,
		name: i(),
		path: i(),
		url: i()
	}), hm = n({
		contentType: i().nullable(),
		id: i(),
		name: i(),
		reason: i(),
		url: i()
	}), mm = n({
		assets: g(um),
		directoryPath: i(),
		failures: g(hm),
		manifestPath: i(),
		summary: n({
			downloadedCount: u().int().nonnegative(),
			elapsedMs: u().nonnegative(),
			failedCount: u().int().nonnegative(),
			requestedCount: u().int().nonnegative()
		})
	});
	var pm = l({
		PayloadSchema: () => ko,
		ResultSchema: () => Ro,
		commandType: () => $o,
		create: () => Co
	});
	const $o = "tab_page_assets_bundle", ko = lm.extend({
		browser_id: i(),
		tab_id: i()
	}), Ro = mm;
	function Co(e) {
		return new m($o, ko, e);
	}
	var fm = l({
		PayloadSchema: () => Po,
		ResultSchema: () => Eo,
		commandType: () => Io,
		create: () => Ao
	});
	const Io = "tab_page_assets_list", Po = n({
		browser_id: i(),
		tab_id: i()
	}), Eo = dm;
	function Ao(e) {
		return new m(Io, Po, e);
	}
	var ym = l({
		Bundle: () => pm,
		List: () => fm
	});
	const _m = {
		id: "pageAssets",
		description: "List assets already observed in the current page state and bundle selected assets into a temporary local artifact."
	};
	var No = class extends ce {
		constructor({ browserId: e, documentation: t, info: a, tabId: r, transport: s }) {
			super(s, e, r, t, a);
		}
		async list() {
			const e = await this.transport.send({ command: Ao({
				browser_id: this.browserId,
				tab_id: this.tabId
			}) });
			return Eo.parse(e);
		}
		async bundle(e) {
			const t = await this.transport.send({ command: Co({
				...e,
				browser_id: this.browserId,
				tab_id: this.tabId
			}) });
			return Ro.parse(t);
		}
	};
	const Do = de({
		capability: No,
		info: _m
	}), Mo = {
		id: "webmcp",
		description: "Fetch page-defined WebMCP tools bound to the current document, then call them through the returned object."
	};
	function Oo(e) {
		return {
			name: e.name,
			call_name: e.call_name,
			...e.title == null ? {} : { title: e.title },
			...e.description == null ? {} : { description: e.description },
			inputSchema: e.input_schema,
			...e.annotations == null ? {} : { annotations: e.annotations },
			...e.origin == null ? {} : { origin: e.origin },
			...e.pageUrl == null ? {} : { pageUrl: e.pageUrl }
		};
	}
	var Bo = class extends ce {
		constructor({ browserId: e, documentation: t, info: a, tabId: r, transport: s }) {
			super(s, e, r, t, a);
		}
		async fetchTools() {
			const e = La.parse(await this.transport.send({ command: qa({
				browser_id: this.browserId,
				tab_id: this.tabId
			}) })), t = e.tools.map(Oo), a = new Map(e.tools.map((s) => [s.call_name, s])), r = bm(t);
			return Object.freeze({
				description: () => r,
				call: async (s, c, o) => {
					const d = s.trim(), p = a.get(d);
					if (p == null) throw new Error(\`WebMCP tool \${JSON.stringify(d)} is not available in this snapshot. Call fetchTools() again.\`);
					return (await this.transport.send({ command: Va({
						browser_id: this.browserId,
						tab_id: this.tabId,
						tool_name: p.name,
						tool_description: p.description,
						tool_title: p.title,
						registration_id: p.registration_id,
						input: c,
						...o?.timeoutMs == null ? {} : { timeout_ms: o.timeoutMs }
					}) })).result;
				}
			});
		}
	};
	function bm(e) {
		return e.length === 0 ? "No WebMCP tools are available in this document." : [
			"WebMCP tools available in this document:",
			JSON.stringify(e.map(({ call_name: t, ...a }) => ({
				...a,
				name: t
			})), null, 2),
			"Call tools.call(name, input) to invoke one."
		].join(\`
\`);
	}
	const jo = de({
		capability: Bo,
		info: Mo
	}), Lo = [
		uo,
		Qn,
		So,
		Do,
		jo
	], gm = vm(Lo), wm = ({ browserId: e, capabilities: t, documentation: a, tabId: r, transport: s }) => {
		const c = {};
		for (const o of t ?? []) {
			const d = gm.get(o.id);
			d != null && Object.assign(c, { [o.id]: d({
				browserId: e,
				documentation: a,
				info: o,
				tabId: r,
				transport: s
			}) });
		}
		return new Gn(c);
	};
	function vm(e) {
		return new Map(e.map((t) => [t.id, t.create]));
	}
	var Ae = class {
		constructor({ browserId: e, dialogId: t, tabId: a, transport: r, type: s }) {
			this.browserId = e, this.dialogId = t, this.tabId = a, this.transport = r, this.type = s;
		}
		async dismiss() {
			await this.transport.send({ command: ke({
				action: "dismiss",
				browser_id: this.browserId,
				dialog_id: this.dialogId,
				tab_id: this.tabId
			}) });
		}
	}, Zo = class extends Ae {
		constructor(e) {
			super({
				...e,
				type: "alert"
			});
		}
	}, qo = class extends Ae {
		constructor(e) {
			super({
				...e,
				type: "beforeunload"
			});
		}
	}, Uo = class extends Ae {
		constructor(e) {
			super({
				...e,
				type: "confirm"
			});
		}
		async accept() {
			await this.transport.send({ command: ke({
				action: "accept",
				browser_id: this.browserId,
				dialog_id: this.dialogId,
				tab_id: this.tabId
			}) });
		}
	}, Fo = class extends Ae {
		constructor(e) {
			super({
				...e,
				type: "prompt"
			});
		}
		async accept(e) {
			if (typeof e != "string") throw new Error("prompt.accept requires text");
			await this.transport.send({ command: ke({
				action: "accept",
				browser_id: this.browserId,
				dialog_id: this.dialogId,
				prompt_text: e,
				tab_id: this.tabId
			}) });
		}
	}, _t = class {
		#e;
		#a;
		constructor({ browserId: e, capabilities: t, documentation: a, transport: r, tabPayload: s = {} }) {
			if (!s.id) throw new Error("Tab requires an id");
			this.#e = e, this.#a = r, this.id = s.id, this.playwright = new Zn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.dom_cua = new qn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.cua = new Fn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.ax = new Vn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.content = new Hn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.clipboard = new Wn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.dev = new zn({
				browserId: e,
				tabId: this.id,
				transport: this.#a
			}), this.capabilities = wm({
				browserId: this.#e,
				capabilities: t,
				documentation: a,
				tabId: this.id,
				transport: this.#a
			});
		}
		async goto(e) {
			if (!e) throw new Error("tab.goto requires a url");
			if (this.#r(), !this.id) throw new Error("tab.goto requires a tab id");
			await this.#a.send({ command: za({
				browser_id: this.#e,
				tab_id: this.id,
				url: e
			}) });
		}
		async markHandoff() {
			await this.#t("handoff");
		}
		async markDeliverable() {
			await this.#t("deliverable");
		}
		async requestManualHandoff() {
			await this.#a.send({ command: Sa({
				browser_id: this.#e,
				tab_id: this.id
			}) });
		}
		async back() {
			this.#r(), await this.#a.send({ command: et({
				browser_id: this.#e,
				tab_id: this.id
			}) });
		}
		async forward() {
			this.#r(), await this.#a.send({ command: tt({
				browser_id: this.#e,
				tab_id: this.id
			}) });
		}
		async reload() {
			this.#r(), await this.#a.send({ command: er({
				browser_id: this.#e,
				tab_id: this.id
			}) });
		}
		async close() {
			this.#r(), await this.#a.send({ command: fa({
				browser_id: this.#e,
				tab_id: this.id
			}) });
		}
		async screenshot(e = {}) {
			this.#r();
			const t = {
				browser_id: this.#e,
				tab_id: this.id,
				fullPage: e.fullPage
			};
			if (e.clip) {
				const { x: a, y: r, width: s, height: c } = e.clip;
				if (typeof a != "number" || typeof r != "number" || typeof s != "number" || typeof c != "number") throw new Error("tab.screenshot clip requires x, y, width, and height");
				t.cropX = a, t.cropY = r, t.cropWidth = s, t.cropHeight = c;
			}
			return Ce((await this.#a.send({ command: Gr(t) })).data);
		}
		async title() {
			return (await this.#s()).title;
		}
		async url() {
			return (await this.#s()).url;
		}
		async getJsDialog() {
			this.#r();
			const e = (await this.#a.send({ command: vr({
				browser_id: this.#e,
				tab_id: this.id
			}) })).dialog;
			if (e != null) return Sm({
				browserId: this.#e,
				dialogId: e.id,
				tabId: this.id,
				transport: this.#a,
				type: e.type
			});
		}
		async #t(e) {
			this.#r(), await this.#a.send({ command: ga({
				browser_id: this.#e,
				tab_id: this.id,
				status: e
			}) });
		}
		#r() {
			if (!this.#a) throw new Error("Tab is not bound to a transport");
		}
		async #s() {
			return this.#r(), await this.#a.send({ command: Qe({
				browser_id: this.#e,
				tab_id: this.id
			}) });
		}
	};
	function Sm({ browserId: e, dialogId: t, tabId: a, transport: r, type: s }) {
		switch (s) {
			case "alert": return new Zo({
				browserId: e,
				dialogId: t,
				tabId: a,
				transport: r
			});
			case "beforeunload": return new qo({
				browserId: e,
				dialogId: t,
				tabId: a,
				transport: r
			});
			case "confirm": return new Uo({
				browserId: e,
				dialogId: t,
				tabId: a,
				transport: r
			});
			case "prompt": return new Fo({
				browserId: e,
				dialogId: t,
				tabId: a,
				transport: r
			});
		}
	}
	var Vo = l({
		PayloadSchema: () => Ne,
		ResultSchema: () => Ho,
		commandType: () => bt,
		create: () => Wo
	});
	const bt = "browser_management_call", Ne = n({
		args: g(Z()),
		browser_id: i(),
		method: i(),
		namespace: i()
	}), Ho = n({ value: Z() });
	function Wo(e) {
		return new m(bt, Ne, e);
	}
	var zo = l({
		AuditChangeSchema: () => Jo,
		PayloadSchema: () => Go,
		ResultSchema: () => Ko,
		commandType: () => gt,
		create: () => Yo
	});
	const gt = "browser_management_get_audit_trail", Go = Ne.pick({ browser_id: !0 }), Jo = Ne.omit({ browser_id: !0 }).extend({
		before: n({
			bookmarks: g(n({
				id: i(),
				index: u().optional(),
				parentId: i().optional(),
				title: i(),
				url: i().optional()
			})),
			tabLayout: n({
				groups: g(n({
					collapsed: k(),
					color: i(),
					id: u(),
					title: i().optional(),
					windowId: u()
				})),
				tabs: g(n({
					autoDiscardable: k(),
					groupId: u(),
					id: u(),
					index: u(),
					pinned: k(),
					url: i().optional(),
					windowId: u()
				}))
			}),
			windows: g(n({
				focused: k(),
				height: u().optional(),
				id: u(),
				left: u().optional(),
				state: i().optional(),
				top: u().optional(),
				width: u().optional()
			}))
		}).partial(),
		createdAt: u(),
		result: Zt([u(), n({ id: i() })]).optional()
	}), Ko = n({ changes: g(Jo) });
	function Yo(e) {
		return new m(gt, Go, e);
	}
	var xm = l({
		Call: () => Vo,
		GetAuditTrail: () => zo,
		commands: () => Tm
	});
	const Tm = {
		[bt]: Vo,
		[gt]: zo
	}, $m = {
		id: "management",
		description: "Organize windows, tabs, tab groups, and bookmarks. Use only for user-requested browser organization."
	};
	var Xo = class extends ht {
		constructor({ browserId: e, documentation: t, info: a, transport: r }) {
			super(r, e, t, a), this.windows = this.createNamespace("windows"), this.tabs = this.createNamespace("tabs"), this.tabGroups = this.createNamespace("tabGroups"), this.bookmarks = this.createNamespace("bookmarks");
		}
		async getAuditTrail() {
			const e = await this.transport.send({ command: Yo({ browser_id: this.browserId }) });
			return Ko.parse(e);
		}
		async invoke(e, t, ...a) {
			const r = await this.transport.send({ command: Wo({
				args: a,
				browser_id: this.browserId,
				method: t,
				namespace: e
			}) });
			return Ho.parse(r).value;
		}
		createNamespace(e) {
			return new Proxy({}, { get: (t, a) => {
				if (!(typeof a != "string" || a === "then" || a === "toJSON" || a in Object.prototype)) return (...r) => this.invoke(e, a, ...r);
			} });
		}
	};
	const Qo = mt({
		capability: Xo,
		info: $m
	});
	var ec = l({
		PayloadSchema: () => tc,
		ResultSchema: () => ac,
		commandType: () => wt,
		create: () => rc
	});
	const wt = "browser_visibility_get", tc = n({ browser_id: i() }), ac = n({ visible: k() });
	function rc(e) {
		return new m(wt, tc, e);
	}
	var sc = l({
		PayloadSchema: () => ic,
		ResultSchema: () => nc,
		commandType: () => vt,
		create: () => oc
	});
	const vt = "browser_visibility_set", ic = n({
		browser_id: i(),
		visible: k()
	}), nc = n({});
	function oc(e) {
		return new m(vt, ic, e);
	}
	var km = l({
		Get: () => ec,
		Set: () => sc,
		commands: () => Rm
	});
	const Rm = {
		[wt]: ec,
		[vt]: sc
	}, Cm = {
		id: "visibility",
		description: "Use to show or hide the browser to the user, and to determine the browser's current visibility. Keep browser work in the background unless the user asks to see it or live viewing is useful. When the browser should be visible, call set(true)."
	};
	var cc = class extends ht {
		constructor({ browserId: e, documentation: t, info: a, transport: r }) {
			super(r, e, t, a);
		}
		async set(e) {
			const t = await this.transport.send({ command: oc({
				browser_id: this.browserId,
				visible: e
			}) });
			nc.parse(t);
		}
		async get() {
			const e = await this.transport.send({ command: rc({ browser_id: this.browserId }) });
			return ac.parse(e).visible;
		}
	};
	const dc = mt({
		capability: cc,
		info: Cm
	});
	var lc = l({
		PayloadSchema: () => uc,
		ResultSchema: () => hc,
		commandType: () => St,
		create: () => mc
	});
	const St = "browser_viewport_reset", uc = n({ browser_id: i() }), hc = n({});
	function mc(e) {
		return new m(St, uc, e);
	}
	var pc = l({
		PayloadSchema: () => fc,
		ResultSchema: () => yc,
		commandType: () => xt,
		create: () => _c
	});
	const xt = "browser_viewport_set", fc = n({
		browser_id: i(),
		height: u().int().positive(),
		width: u().int().positive()
	}), yc = n({});
	function _c(e) {
		return new m(xt, fc, e);
	}
	var Im = l({
		Reset: () => lc,
		Set: () => pc,
		commands: () => Pm
	});
	const Pm = {
		[St]: lc,
		[xt]: pc
	}, Em = {
		id: "viewport",
		description: "Controls an explicit browser viewport override for responsive or device-size testing. Use it when a task calls for specific dimensions or breakpoint validation; otherwise leave it unset so the browser uses its normal viewport. Reset temporary overrides before finishing unless the user asked to keep them."
	};
	var bc = class extends ht {
		constructor({ browserId: e, documentation: t, info: a, transport: r }) {
			super(r, e, t, a);
		}
		async set(e) {
			const t = await this.transport.send({ command: _c({
				browser_id: this.browserId,
				...e
			}) });
			yc.parse(t);
		}
		async reset() {
			const e = await this.transport.send({ command: mc({ browser_id: this.browserId }) });
			hc.parse(e);
		}
	};
	const gc = mt({
		capability: bc,
		info: Em
	}), wc = [
		Qo,
		dc,
		gc
	], Am = Dm(wc), Nm = ({ browserId: e, capabilities: t, documentation: a, transport: r }) => {
		const s = {};
		for (const c of t ?? []) {
			const o = Am.get(c.id);
			o != null && (s[c.id] = o({
				browserId: e,
				documentation: a,
				info: c,
				transport: r
			}));
		}
		return new Gn(s);
	};
	function Dm(e) {
		return new Map(e.map((t) => [t.id, t.create]));
	}
	var vc = class {
		#e;
		#a;
		#t;
		constructor({ capabilities: e, onBrowserUsed: t, transport: a, browserId: r }) {
			this.#e = r, this.#a = t, this.#t = a, this.browserId = r;
			const s = new st(a);
			this.capabilities = Nm({
				browserId: r,
				capabilities: e?.browser,
				documentation: s,
				transport: a
			});
			const c = (o) => new _t({
				browserId: r,
				capabilities: e?.tab,
				documentation: s,
				transport: a,
				tabPayload: o
			});
			this.tabs = new Rn({
				browserId: r,
				createTab: c,
				transport: a
			}), this.user = new Cn({
				browserId: r,
				createTab: c,
				transport: a
			});
		}
		async documentation() {
			return this.#a?.(), await this.#t.send({ command: sa({ browser_id: this.browserId }) });
		}
		async history(e = {}) {
			if (e === null || Array.isArray(e) || typeof e != "object") throw new Error("browser.history expects an options object");
			const t = { browser_id: this.#e }, a = Mm(e.queries), r = Om(e.limit), s = Sc(e.from, "from"), c = Sc(e.to, "to");
			return a !== void 0 && (t.queries = a), r !== void 0 && (t.limit = r), s !== void 0 && (t.from = s), c !== void 0 && (t.to = c), (await this.#t.send({ command: mr(t) })).items;
		}
		async nameSession(e) {
			const t = e.trim();
			if (!t) throw new Error("browser.nameSession requires a name");
			await this.#t.send({ command: Ra({
				browser_id: this.browserId,
				name: t
			}) });
		}
	};
	const Sc = (e, t) => {
		if (e == null) return;
		const a = e instanceof Date ? e : new Date(e);
		if (Number.isNaN(a.getTime())) throw new Error(\`browser.history received an invalid \${t} date\`);
		return a.toISOString();
	}, Mm = (e) => {
		if (e == null) return;
		if (!Array.isArray(e) || e.length === 0) throw new Error("browser.history received invalid queries");
		const t = [];
		for (const a of e) {
			if (typeof a != "string") throw new Error("browser.history received invalid queries");
			t.push(a);
		}
		return t;
	}, Om = (e) => {
		if (e != null) {
			if (!Number.isInteger(e) || e <= 0) throw new Error("browser.history received an invalid limit");
			return e;
		}
	};
	var xc = class {
		constructor({ executeAgentCommand: e, displaySideEffect: t } = {}) {
			if (typeof e != "function") throw new Error("FunctionAgentTransport requires an executeAgentCommand function");
			this.executeAgentCommand = e, this.displaySideEffect = t ?? Lm;
		}
		async display(e) {
			await this.displaySideEffect(e);
		}
		async send({ command: e, timeoutMs: t }) {
			const a = e.toJSON(), r = await Bm(await this.executeAgentCommand({
				...a,
				client_timeout_ms: typeof t == "number" && t > 0 ? t : void 0
			}), this.displaySideEffect);
			if (r == null) throw new Error("transport send returned empty response");
			return r;
		}
	};
	const Bm = async (e, t) => {
		const a = jm.safeParse(e);
		if (!a.success) return e;
		for (const c of a.data.side_effects) await t(c);
		const { side_effects: r, ...s } = a.data;
		return s;
	}, jm = n({ side_effects: g(i()) }).passthrough(), Lm = async (e) => {
		const t = globalThis.display;
		if (typeof t == "function") {
			await t(e);
			return;
		}
		console.log(e);
	};
	var Zm = l({
		AXAPI: () => Vn,
		Agent: () => kn,
		AlertDialog: () => Zo,
		AtlasCommand: () => m,
		BeforeUnloadDialog: () => qo,
		BotDetectionTabCapability: () => Xn,
		Browser: () => vc,
		BrowserAuthTabCapability: () => vo,
		BrowserManagementCommands: () => xm,
		BrowserUser: () => Cn,
		BrowserViewportCommands: () => Im,
		BrowserVisibilityCommands: () => km,
		Browsers: () => $n,
		CUAAPI: () => Fn,
		CdpTabCapability: () => lo,
		Commands: () => Ih,
		ConfirmDialog: () => Uo,
		ContentAPI: () => Hn,
		Documentation: () => st,
		DomCUAAPI: () => qn,
		FunctionAgentTransport: () => xc,
		ManagementBrowserCapability: () => Xo,
		PageAssetsTabCapability: () => No,
		PlaywrightAPI: () => Zn,
		PlaywrightDownload: () => jn,
		PlaywrightFileChooser: () => Ln,
		PlaywrightFrameLocator: () => Bn,
		PlaywrightLocator: () => oe,
		PromptDialog: () => Fo,
		Tab: () => _t,
		TabBotDetectionCommands: () => Uh,
		TabBrowserAuthCommands: () => rm,
		TabCdpCommands: () => Gh,
		TabClipboardAPI: () => Wn,
		TabDevAPI: () => zn,
		TabPageAssetsCommands: () => ym,
		TabWebMcpCapability: () => Bo,
		Tabs: () => Rn,
		ViewportBrowserCapability: () => bc,
		VisibilityBrowserCapability: () => cc,
		botDetectionTabCapabilityDefinition: () => Qn,
		browserAuthTabCapabilityDefinition: () => So,
		browserCapabilityDefinitions: () => wc,
		cdpTabCapabilityDefinition: () => uo,
		generateRequestId: () => Ph,
		hasErrorMessage: () => Eh,
		isPlainObject: () => En,
		isRegExp: () => Ie,
		managementBrowserCapabilityDefinition: () => Qo,
		pageAssetsTabCapabilityDefinition: () => Do,
		tabCapabilityDefinitions: () => Lo,
		toWebMcpToolDescriptor: () => Oo,
		viewportBrowserCapabilityDefinition: () => gc,
		visibilityBrowserCapabilityDefinition: () => dc,
		webMcpTabCapabilityDefinition: () => jo,
		webMcpTabCapabilityInfo: () => Mo
	});
	function qm({ apiManifest: e, browserInfo: t, disabledMemberIds: a }) {
		const r = new Set(a);
		for (const [s, c] of Object.entries(e.interfaces)) for (const [o, d] of Object.entries(c)) {
			const p = \`\${s}.\${o}\`;
			(t.apiSupportOverrides?.[p] ?? d.unsupportedByDefaultIn?.includes(t.type) !== !0) || r.add(p);
		}
		return r;
	}
	var Um = class {
		apiManifest;
		disabledMemberIds;
		view;
		constructor({ apiManifest: e, decorateTab: t, disabledMemberIds: a }) {
			this.apiManifest = e, this.disabledMemberIds = a, this.view = Fm(e, t);
		}
		createBrowser = ({ browserInfo: e, onBrowserUsed: t, transport: a }) => {
			const r = qm({
				apiManifest: this.apiManifest,
				browserInfo: e,
				disabledMemberIds: this.disabledMemberIds
			});
			return this.view(new vc({
				browserId: e.id,
				capabilities: e.capabilities,
				onBrowserUsed: t,
				transport: a
			}), r);
		};
		wrapAgent(e) {
			return this.view(e, this.disabledMemberIds);
		}
		createAgent({ displaySideEffect: e, executeAgentCommand: t }) {
			return this.wrapAgent(new kn({
				createBrowser: this.createBrowser,
				transport: new xc({
					displaySideEffect: e,
					executeAgentCommand: t
				})
			}));
		}
	};
	function Fm(e, t) {
		const a = /* @__PURE__ */ new WeakMap(), r = Object.keys(e.interfaces).map((s) => {
			const c = Reflect.get(Zm, s);
			if (!Vm(c)) throw new Error(\`Browser API interface has no runtime type: \${s}\`);
			return [c, s];
		});
		return (s, c) => {
			const o = /* @__PURE__ */ new WeakMap(), d = (f) => {
				if (f == null || typeof f != "object") return f;
				return a.get(f) ?? (Array.isArray(f) ? f.map(d) : En(f) ? Object.fromEntries(Object.entries(f).map(([P, D]) => [P, d(D)])) : f);
			}, p = (f) => {
				if (f == null || typeof f != "object" || a.has(f)) return f;
				if (f instanceof Promise) return f.then(p);
				if (Array.isArray(f)) return f.map(p);
				const R = r.find(([A]) => f instanceof A)?.[1];
				if (R == null) return f;
				const P = o.get(f);
				if (P != null) return P;
				const D = (A) => typeof A != "string" || !c.has(\`\${R}.\${A}\`), kc = /* @__PURE__ */ new Map(), le = new Proxy(f, {
					get(A, O) {
						if (!D(O)) return;
						const U = Reflect.get(A, O, A);
						if (O === "constructor") return U;
						if (typeof U != "function") return p(U);
						const Rc = kc.get(O);
						if (Rc != null) return Rc;
						const Cc = (...Km) => p(Reflect.apply(U, A, Km.map((Ym) => d(Ym))));
						return kc.set(O, Cc), Cc;
					},
					getOwnPropertyDescriptor(A, O) {
						if (!D(O)) return;
						const U = Reflect.getOwnPropertyDescriptor(A, O);
						return U == null || !("value" in U) ? U : {
							...U,
							value: p(U.value)
						};
					},
					has(A, O) {
						return D(O) && Reflect.has(A, O);
					},
					ownKeys(A) {
						return Reflect.ownKeys(A).filter(D);
					}
				});
				return o.set(f, le), a.set(le, f), le instanceof _t && t?.(le), le;
			};
			return p(s);
		};
	}
	function Vm(e) {
		return typeof e == "function" && e.prototype != null;
	}
	function Hm({ apiManifest: e, decorateTab: t, disabledMemberIds: a, displayBridge: r, executeAgentCommand: s }) {
		return new Um({
			apiManifest: e,
			decorateTab: t,
			disabledMemberIds: a
		}).createAgent({
			displaySideEffect: Zc({
				displayBridge: r,
				displayTruncateMaxChars: 1e5
			}),
			executeAgentCommand: s
		});
	}
	Object.freeze(["http:", "https:"]);
	(function(e) {
		return e.Default = "", e.DisabledForLocalTesting = "disabled-for-local-testing", e.GaasBrowserEnvironment = "gaas-browser-environment", e;
	})({}).Default;
	const De = {
		distribution: "chrome-web-store",
		extensionIds: ["lfkehkpjohcoelkpembgemeipeppanef"],
		outputModes: [],
		releaseChannel: "beta",
		signingIdentity: null,
		storeUrl: "https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef"
	}, Tc = {
		distribution: "chrome-web-store",
		extensionIds: ["hehggadaopoacecdllhhajmbjkdcmajg"],
		outputModes: [],
		releaseChannel: "stable",
		signingIdentity: null,
		storeUrl: "https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg"
	}, $c = {
		distribution: "microsoft-edge-add-ons",
		extensionIds: ["odlomjlbamekndcpllcnffbgeohgkmjh"],
		outputModes: [],
		releaseChannel: "stable",
		signingIdentity: null,
		storeUrl: "https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh"
	}, ae = {
		chrome: {
			dev: [
				{
					distribution: "local-development",
					extensionIds: [],
					outputModes: ["file"],
					releaseChannel: "dev",
					signingIdentity: "development"
				},
				{
					distribution: "managed-self-hosted",
					extensionIds: [],
					outputModes: ["file"],
					releaseChannel: "dev",
					signingIdentity: "development"
				},
				De
			],
			internal: [{
				distribution: "managed-self-hosted",
				extensionIds: [],
				outputModes: ["file", "blobstore"],
				releaseChannel: "beta",
				signingIdentity: "beta"
			}, De],
			prod: [{
				distribution: "managed-self-hosted",
				extensionIds: [],
				outputModes: ["file"],
				releaseChannel: "stable",
				signingIdentity: "stable"
			}, Tc]
		},
		edge: {
			dev: [
				{
					distribution: "local-development",
					extensionIds: [],
					outputModes: ["file"],
					releaseChannel: "dev",
					signingIdentity: "development"
				},
				{
					distribution: "managed-self-hosted",
					extensionIds: [],
					outputModes: ["file"],
					releaseChannel: "dev",
					signingIdentity: "development"
				},
				De
			],
			internal: [
				{
					distribution: "managed-self-hosted",
					extensionIds: [],
					outputModes: ["file", "blobstore"],
					releaseChannel: "beta",
					signingIdentity: "beta"
				},
				$c,
				De
			],
			prod: [
				{
					distribution: "managed-self-hosted",
					extensionIds: [],
					outputModes: ["file"],
					releaseChannel: "stable",
					signingIdentity: "stable"
				},
				$c,
				Tc
			]
		}
	};
	ae.chrome.dev, ae.chrome.internal, ae.chrome.prod;
	ae.edge.dev, ae.edge.internal, ae.edge.prod;
	var Wm = class {
		closed = !1;
		nextId = 1;
		pendingRequests = /* @__PURE__ */ new Map();
		requestHandlers = /* @__PURE__ */ new Map();
		eventHandlers = /* @__PURE__ */ new Map();
		constructor(e) {
			this.transport = e, this.transport.setMessageCallback((t) => {
				this.handleIncomingMessage(t);
			}), this.transport.addCloseListener?.((t) => {
				this.closed = !0, this.rejectPendingRequests(t?.message ?? "transport closed before response");
			});
		}
		registerRequestHandlerObject(e) {
			[...Object.getOwnPropertyNames(e), ...Object.getOwnPropertyNames(Object.getPrototypeOf(e))].filter((t) => t !== "constructor" && typeof e[t] == "function").forEach((t) => {
				const a = e[t];
				a && this.registerRequestHandler(t, a.bind(e));
			});
		}
		registerRequestHandler(e, t) {
			this.requestHandlers.set(e, t);
		}
		addEventListener(e, t) {
			const a = e.toString(), r = this.eventHandlers.get(a) ?? [];
			r.push(t), this.eventHandlers.set(a, r);
		}
		removeEventListener(e, t) {
			const a = e.toString(), r = this.eventHandlers.get(a) ?? [];
			this.eventHandlers.set(a, r.filter((s) => s !== t));
		}
		sendNotification(e, t) {
			this.transport.sendMessage({
				jsonrpc: "2.0",
				method: e,
				params: t
			});
		}
		sendRequest(e, t) {
			const a = this.nextId++;
			return new Promise((r, s) => {
				this.pendingRequests.set(a, {
					resolve: r,
					reject: s
				});
				try {
					this.transport.sendMessage({
						jsonrpc: "2.0",
						method: e.toString(),
						params: t,
						id: a
					});
				} catch (c) {
					this.pendingRequests.delete(a), s(c);
				}
			});
		}
		async handleIncomingMessage(e) {
			if ("method" in e) return this.handleIncomingRequest(e);
			if (e.id === void 0) return;
			const t = this.pendingRequests.get(e.id);
			if (t) {
				if (this.pendingRequests.delete(e.id), "error" in e) {
					t.reject(e.error?.message || "Something went wrong");
					return;
				}
				t.resolve(e.result);
			}
		}
		rejectPendingRequests(e) {
			for (const t of this.pendingRequests.values()) t.reject(e);
			this.pendingRequests.clear();
		}
		async handleIncomingRequest(e) {
			if (e.id === void 0) {
				(this.eventHandlers.get(e.method ?? "") ?? []).forEach((a) => a(e.params));
				return;
			}
			const t = this.requestHandlers.get(e.method ?? "");
			if (!t) {
				this.transport.sendMessage({
					jsonrpc: "2.0",
					id: e.id,
					error: {
						code: -1,
						message: \`No handler registered for method: \${e.method}\`
					}
				});
				return;
			}
			try {
				const a = await t(e.params);
				if (this.closed) return;
				this.transport.sendMessage({
					jsonrpc: "2.0",
					id: e.id,
					result: a
				});
			} catch (a) {
				if (this.closed) return;
				this.transport.sendMessage({
					jsonrpc: "2.0",
					id: e.id,
					error: {
						code: 1,
						message: a instanceof Error ? a.message : String(a)
					}
				});
			}
		}
	}, zm = class extends Wm {
		constructor(e) {
			super(e), this.setup = this.setup.bind(this), this.execute = this.execute.bind(this), this.display = this.display.bind(this);
		}
		setup() {
			return this.sendRequest("setup");
		}
		execute(e) {
			return this.sendRequest("execute", e);
		}
		display(e) {
			return this.sendRequest("display", e);
		}
	}, Gm = class {
		closeListeners = /* @__PURE__ */ new Set();
		closed = !1;
		messageCallback;
		constructor(e) {
			this.port = e, this.port.onmessage = (t) => {
				this.messageCallback?.(t.data);
			}, this.port.onmessageerror = () => {
				this.finish(/* @__PURE__ */ new Error("JavaScript kernel agent port received invalid data"));
			}, this.port.start();
		}
		sendMessage(e) {
			if (this.closed) throw new Error("JavaScript kernel agent transport is closed");
			this.port.postMessage(e);
		}
		setMessageCallback(e) {
			this.messageCallback = e;
		}
		addCloseListener(e) {
			return this.closeListeners.add(e), () => {
				this.closeListeners.delete(e);
			};
		}
		async close() {
			this.finish();
		}
		finish(e) {
			if (!this.closed) {
				this.closed = !0, this.port.close();
				for (const t of this.closeListeners) Promise.resolve(t(e)).catch(() => {});
				this.closeListeners.clear();
			}
		}
	};
	function Jm() {
		const e = globalThis;
		let t = { evaluate: globalThis.eval }, a = Promise.resolve();
		e.addEventListener("message", (r) => {
			if (r.data.type === "js-kernel:agent-port") {
				const o = r.ports[0];
				if (o == null) return;
				const d = new zm(new Gm(o)), p = async (R) => {
					await d.display(R);
				}, f = async (R) => {
					await d.display(R);
				};
				e.nodeRepl = { write: p }, Object.assign(e, { display: p }), e.setupBrowserRuntime = async () => {
					const { apiManifest: R, disabledMemberIds: P } = await d.setup();
					return Hm({
						apiManifest: R,
						disabledMemberIds: new Set(P),
						displayBridge: {
							displayImage: f,
							displayValue: p
						},
						executeAgentCommand: (D) => d.execute(D)
					});
				};
				return;
			}
			const { id: s, script: c } = r.data;
			a = a.then(async () => {
				try {
					let o = t;
					await t.evaluate(\`(async function () {
arguments[0]({ evaluate(source) { return eval(source); } });
\${c}
})\`)((d) => {
						o = d;
					}), t = o, e.postMessage({
						id: s,
						ok: !0
					});
				} catch (o) {
					e.postMessage({
						error: o instanceof Error ? {
							message: o.message,
							name: o.name,
							...o.stack == null ? {} : { stack: o.stack }
						} : {
							message: typeof o == "string" ? o : "JavaScript execution failed",
							name: "Error"
						},
						id: s,
						ok: !1
					});
				}
			});
		});
	}
	Jm();
})();
`,o=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",c],{type:"text/javascript;charset=utf-8"});function h(n){let e;try{if(e=o&&(self.URL||self.webkitURL).createObjectURL(o),!e)throw"";const t=new Worker(e,{name:n?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(c),{name:n?.name})}}var m=class{pending=new Map;nextRequestId=0;resetError;worker=null;constructor(n){this.onAgentPort=n}executeJs(n){if(this.resetError!=null)return Promise.reject(this.resetError);const e=this.getWorker(),t=String(this.nextRequestId++);return new Promise((s,a)=>{this.pending.set(t,{reject:a,resolve:s});try{e.postMessage({id:t,script:n,type:"js-kernel:execute"})}catch(r){this.fail(r)}})}getWorker(){if(this.worker!=null)return this.worker;const n=new h;n.addEventListener("message",t=>{l(t.data)&&this.handleResponse(t.data)}),n.addEventListener("error",t=>{this.fail(new Error(t.message||"JavaScript worker failed"))}),n.addEventListener("messageerror",()=>{this.fail(new Error("JavaScript worker returned an invalid result"))});const e=new MessageChannel;return n.postMessage({type:"js-kernel:agent-port"},[e.port1]),this.onAgentPort(e.port2),this.worker=n,n}handleResponse(n){const e=this.pending.get(n.id);if(e==null)return;if(this.pending.delete(n.id),n.ok){e.resolve();return}const t=new Error(n.error?.message??"JavaScript execution failed");t.name=n.error?.name??"Error",n.error?.stack!=null&&(t.stack=n.error.stack),e.reject(t)}fail(n){this.worker?.terminate(),this.worker=null;const e=new Error(`${n instanceof Error?n.message:"JavaScript worker stopped"}; this task's JavaScript kernel will be reset.`);e.name="JsKernelWorkerResetError",this.resetError=e;for(const t of this.pending.values())t.reject(e);this.pending.clear()}},p=new m(n=>{window.parent.postMessage({type:"js-kernel:agent-port"},"*",[n])});function f(){window.addEventListener("message",n=>{if(n.source!==window.parent||!d(n.data)||n.data.type!=="js-kernel:execute")return;const e=n.ports[0];e!=null&&_(n.data,e)}),window.parent.postMessage({type:"js-kernel:ready"},"*")}async function _(n,e){try{await p.executeJs(n.script),e.postMessage({id:n.id,ok:!0})}catch(t){e.postMessage({error:u(t),id:n.id,ok:!1})}finally{e.close()}}f();
