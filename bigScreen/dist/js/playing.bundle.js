/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(requestTimeout) { // eslint-disable-line no-unused-vars
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "224c27025a028e8241d4"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 2;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(25)(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(3);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d924ad1187e642e1298ff283f79df9c4.ttf";

/***/ }),
/* 3 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function ajax( opts ) {

    //1.设置默认参数
    var defaults = {
        method: 'GET', //请求方式
        url: '', //发送请求的地址
        data: '', //发送数据
        async: true,//是否异步
        cache: true,//是否缓存
        contentType: 'application/x-www-form-urlencoded',//http头信息
        success: function () {},
        error: function () {},
    };

    //2.覆盖参数
    for( var key in opts ) {
        defaults[key] = opts[key];
    };

    //3.数据处理
    if ( typeof defaults.data === 'object' ) { //处理data
        var str = '';
        for( var key in defaults.data ) {
            str += key + '=' + defaults.data[key] + '&'
        }
        defaults.data = str.substring(0, str.length - 1);
    };

    defaults.method = defaults.method.toUpperCase();  //请求方式字符转换成大写

    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime(); //处理 缓存


    if ( defaults.method === 'GET' && (defaults.data || defaults.cache) ) {
        defaults.url += '?' + defaults.data + defaults.cache;
    };

    //4.编写ajax
    var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXobject('Microsoft.XMLHTTP');


    //与服务器建立链接，告诉服务器你要做什么
    oXhr.open(defaults.method, defaults.url, defaults.async);

    //发送请求
    if ( defaults.method === 'GET' ) {
        oXhr.send(null);
    } else {
        oXhr.setRequestHeader("Content-type", defaults.contentType);
        oXhr.send(defaults.data);
    }

    //等代服务器回馈
    oXhr.onreadystatechange = function () {
        if ( oXhr.readyState === 4 ) {
            if (oXhr.status === 200) {
                defaults.success.call(oXhr, oXhr.responseText);
            } else {
                defaults.error();
            };
        };
    };

};

module.exports = ajax;


//The end

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HKHB';\n    src: url(" + __webpack_require__(2) + ");\n    font-style: normal;\n    font-weight: normal;\n}\n\nhtml{\n\n}\nbody{\n\toverflow: hidden;\n\tbackground: url(" + __webpack_require__(27) + ") no-repeat;\n    background-size: auto 100%;\n    background-position: 0%;\n}\n\n.mainBodyWrapper {\n\tmin-width: 1430px;\n\tmargin-top: 3%;\n\toverflow: hidden;\n\tposition: relative;\n    width: 100%;\n    z-index: 30;\n}\n\n.topTitle{\n\tposition: relative;\n\twidth: 30%;\n\tmargin:0 auto;\n\tmargin-top: 0.5%;\n}\n\n.topTitle .title{\n\twidth: 100%;\n}\n\n.progress{\n\tposition: absolute;\n\ttop: 25%;\n\tleft: 76%;\n\tcolor: yellow;\n\tfont-family: HKHB;\n\tfont-size: 2vw;\n\tline-height: 140%;\n\ttext-align-last: left;\n}\n\nimg.UFO{\n\tposition: absolute;\n\twidth: 0%;\n\ttop: 3%;\n\tleft: 10%;\n\ttransition: all 2s;\n}\n\nimg.movingUFO{\n\tposition: absolute;\n\twidth: 8%;\n\ttop: 21%;\n\tleft: 10%;\n\ttransition: all 2s;\n}\n\n.spaceStation{\n\tposition: relative;\n\twidth: 62%;\n\tmargin-left: -60%;\n\tmargin-top:  -9.9%;\n\t/*transition: margin-left 2s, margin-top 2s;*/\n}\n\n.movingSpaceStation{\n\tposition: relative;\n\twidth: 62%;\n\tmargin-left: 19%;\n\tmargin-top:  -1.9%;\n\ttransition: margin-left 4s, margin-top 2s;\n}\n\n#station{\n\twidth: 100%;\n}\n\n.yellowLight{\n\tposition: absolute;\n\twidth: 5%;\n\ttop: 69%;\n}\n\n\nimg.first{\n\tleft: 8%;\n}\nimg.second{\n\tleft: 19%;\n}\nimg.third{\n\tleft: 77%;\n}\nimg.fourth{\n\tleft: 88%;\n}\n\nimg.firstLight{\n\twidth: 10%;\n\tleft: 7%;\n\ttop: 61%;\n}\n\nimg.secondLight{\n\twidth: 10%;\n\ttop: 61%;\n\tleft: 17%;\n}\nimg.thirdLight{\n\twidth: 10%;\n\ttop: 61%;\n\tleft: 75%;\n}\nimg.fourthLight{\n\twidth: 10%;\n\ttop: 61%;\n\tleft: 86%;\n}\n\n.astronaut{\n\tposition: absolute;\n\twidth: 11.5%;\n\tmargin-left: 74%;\n\tmargin-top: -5.6%;\n}\n\n.astronaut img{\n\twidth: 100%;\n}\n\n.userHead{\n\tposition: absolute;\n\twidth: 90%;\n\theight: 9.6%;\n\ttop: 66%;\n\tleft: 4.5%;\n}\n\n.heads{\n\twidth: 5.0%;\n\theight: 100%;\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 3.7%;\n\tmargin-top: 1.2%;\n\tbackground: url(" + __webpack_require__(28) + ") no-repeat;\n\tbackground-size: 100%;\n}\n.one{\n\tmargin-left: 4.9%;\n}\n.two{\n\tmargin-left: 3.8%;\n}\n\n.four{\n\tmargin-left: 3.5%;\n}\n.heads img{\n\twidth: 65%;\n\theight: 55%;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tmargin-top: 17%;\n\tborder-radius: 50%;\n}\n\n#first{\n\tmargin-left: 9.1%;\n}\n\n.bigPlane{\n\tposition: absolute;\n\twidth: 100%;\n\tmargin-top: -20%;\n\tz-index: 0;\n}\n\n.redRock{\n\tposition: absolute;\n\twidth: 37%;\n\ttop: 61.5%;\n\tleft: 32.5%;\n\tz-index: 999;\n}\n\nhr{\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 99999999;\n\tcolor: white;\n}\n\nhr.top{\n\ttop: 64.5%;\n}\n\nhr.buttom{\n\ttop: 85%;\n}\n.rock{\n\twidth: 100%;\n\ttop: 0;\n\tz-index: 999;\n}\n\n.redRock_1{\n\tposition: absolute;\n\twidth: 36.8%;\n\ttop: 62.5%;\n\tleft: 32.525%;\n\tz-index: 999;\n}\n\n.redRock_2{\n\tposition: absolute;\n\twidth: 38.8%;\n\ttop: 59.8%;\n\tleft: 31.44%;\n\tz-index: 999;\n}\n\n.redRock_3{\n\tposition: absolute;\n\twidth: 40.4%;\n\ttop: 57.0%;\n\tleft: 30.59%;\n\tz-index: 999;\n}\n\n.redRock_4{\n\tposition: absolute;\n\twidth: 42.60%;\n\ttop: 54.0%;\n\tleft: 29.44%;\n\tz-index: 999;\n}\n\n.redRock_5{\n\tposition: absolute;\n\twidth: 44.55%;\n\ttop: 50.7%;\n\tleft: 28.53%;\n\tz-index: 999;\n}\n\n.redRock_6{\n\tposition: absolute;\n\twidth: 46.3%;\n\ttop: 47.7%;\n\tleft: 27.6%;\n\tz-index: 999;\n}\n\n.redRock_7{\n\tposition: absolute;\n\twidth: 47.9%;\n\ttop: 45.3%;\n\tleft: 26.73%;\n\tz-index: 999;\n}\n\n.redRock_8{\n\tposition: absolute;\n\twidth: 49.9%;\n\ttop: 42.3%;\n\tleft: 25.7%;\n\tz-index: 999;\n}\n\n.redRock_9{\n\tposition: absolute;\n\twidth: 51.9%;\n\ttop: 39%;\n\tleft: 24.7%;\n\tz-index: 999;\n}\n\n.redRock_10{\n\tposition: absolute;\n\twidth: 53.50%;\n\ttop: 36.5%;\n\tleft: 23.9%;\n\tz-index: 999;\n}\n\n\n.under{\n\tdisplay: block;\n\toverflow: hidden;\n\tposition: absolute;\n\ttop: 63%;\n\tleft: 33%;\n\twidth: 0%;\n\theight: 22%;\n\tbackground: linear-gradient(to bottom, #ff93a0, #ec6173);\n\tz-index: 9;\n\ttransition: width 0.5;\n}\n\n.under img{\n\theight: 100%;\n\topacity: 0;\n}\n\n@media screen and (min-width:1400px) and (max-width:1550px) {\n    .bigPlane {\n        margin-top: -21%;\n    }\n    .movingSpaceStation{\n    \tmargin-top: 6%;\n    }\n}\n\n@media screen and (min-width:1550px) and (max-width:1700px) {\n    .bigPlane {\n        margin-top: -19%;\n    }\n    .movingSpaceStation{\n    \tmargin-top: 4%;\n    }\n}\n\n@media screen and (min-width:1700px) and (max-width:1900px) {\n    .bigPlane {\n        margin-top: -17%;\n    }\n    .movingSpaceStation{\n    \tmargin-top: 2%;\n    }\n}\n\n@media screen and (min-width:1900px) and (max-width:2400px) {\n    .bigPlane {\n        margin-top: -15%;\n    }\n    .movingSpaceStation{\n    \tmargin-top: 1.8%;\n    }\n}\n", ""]);

// exports


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_playing_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ajax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Ajax_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shineRedRock_1_png__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shineRedRock_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_shineRedRock_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shineRedRock_2_png__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shineRedRock_2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_shineRedRock_2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shineRedRock_3_png__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shineRedRock_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_shineRedRock_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shineRedRock_4_png__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shineRedRock_4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_shineRedRock_4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_shineRedRock_5_png__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_shineRedRock_5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_shineRedRock_5_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_shineRedRock_6_png__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_shineRedRock_6_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__img_shineRedRock_6_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_shineRedRock_7_png__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_shineRedRock_7_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__img_shineRedRock_7_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_shineRedRock_8_png__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_shineRedRock_8_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__img_shineRedRock_8_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_shineRedRock_9_png__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_shineRedRock_9_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__img_shineRedRock_9_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_shineRedRock_10_png__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_shineRedRock_10_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__img_shineRedRock_10_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png__);
















var w = document.body.clientWidth;
var h = window.screen.availHeight;
var body = document.querySelector('body');


//动态设定总体高度
var mainBodyWrapper = document.querySelector('.mainBodyWrapper');
//mainBodyWrapper.style.height = w / 2.4 + 'px';
mainBodyWrapper.style.height = body.style.height = h - 5 + 'px';

//UFO
var UFO = document.querySelector('.UFO');
UFO.style.top = '21%';
//上下浮动函数
function moving(target, init, range, time) {
    setInterval(function() {
        if (target.style.top === init) {
            target.style.top = range;
        } else if (target.style.top === range) {
            target.style.top = init;
        }
    }, time);
}

moving(UFO, '21%', '27%', 1200);

setTimeout(function() {
    UFO.className = 'movingUFO';
}, 3000);


var space = document.querySelector('.spaceStation');
var range = '';
var init = '';

if (w <= 1550) {
    space.style.marginTop = '6%';
    init = '6%';
    range = '9%';
}
if (w > 1550 && w <= 1700) {
    space.style.marginTop = '4%';
    init = '4%';
    range = '10%';
}
if (w > 1700 && w <= 1900) {
    space.style.marginTop = '2%';
    init = '2%';
    range = '7%';
}
if (w > 1900) {
    space.style.marginTop = '1.8%';
    init = '1.8%';
    range = '5%';
}


setInterval(function() {
    if (space.style.marginTop === init) {
        space.style.marginTop = range;
    } else if (space.style.marginTop === range) {
        space.style.marginTop = init;
    }
}, 1200);


//背景移动
var body = document.querySelector('body');
var bodyPosition = 0;
var movingSpeed = 0.1;
setInterval(function() {
    bodyPosition += movingSpeed;
    if (bodyPosition >= 88.7) {
        bodyPosition = 0;
    }
    body.style.backgroundPosition = bodyPosition + '%';
}, 10);

//space station
var spaceStation = document.querySelector('.spaceStation');
var yellowLight = document.querySelectorAll('.yellowLight');


spaceStation.className = 'movingSpaceStation';

//redRock and progress
var redRockWrapper = document.querySelector('.redRock');
var redRock = document.querySelector('.rock');
var under = document.querySelector('.under');
var percent = document.querySelector('.progress');
var userHead = document.querySelector('.userHead');
var users = userHead.querySelectorAll('img');

//console.log(userHeads[0].childNodes);

var redRockProgress = 0;

// var progressTimer = setInterval(function() {

//     redRockProgress += 0.03;
//     percent.innerHTML = parseInt(100 / 36 * redRockProgress) + '%';

//     if (redRockProgress >= 9) {
//         yellowLight[0].className = 'yellowLight firstLight';
//         yellowLight[0].src = yellowLight_0;
//     }
//     if (redRockProgress >= 18) {
//         yellowLight[1].className = 'yellowLight secondLight';
//         yellowLight[1].src = yellowLight_0;
//     }
//     if (redRockProgress >= 27) {
//         yellowLight[2].className = 'yellowLight thirdLight';
//         yellowLight[2].src = yellowLight_0;
//     }
//     if (redRockProgress >= 33) {
//         yellowLight[3].className = 'yellowLight fourthLight';
//         yellowLight[3].src = yellowLight_0;
//     }

//     movingSpeed = redRockProgress / 99 + 0.1;
//     if (redRockProgress >= 36) {
//         redRockProgress = 36;
//         shineWords();
//         under.style.display = 'none';
//         clearInterval(progressTimer);
//         setTimeout(function() {
//             window.location.href = '../view/end.html' + window.location.search;
//         }, 10000);
//     }
//     under.style.width = redRockProgress + '%';
// }, 20);


function shineFlash(shineNum) {
    switch (shineNum) {
        case 1:
            redRockWrapper.className = 'redRock_1';
            redRock.src = __WEBPACK_IMPORTED_MODULE_2__img_shineRedRock_1_png___default.a;
            break;
        case 2:
            redRockWrapper.className = 'redRock_2';
            redRock.src = __WEBPACK_IMPORTED_MODULE_3__img_shineRedRock_2_png___default.a;
            break;
        case 3:
            redRockWrapper.className = 'redRock_3';
            redRock.src = __WEBPACK_IMPORTED_MODULE_4__img_shineRedRock_3_png___default.a;
            break;
        case 4:
            redRockWrapper.className = 'redRock_5';
            redRock.src = __WEBPACK_IMPORTED_MODULE_6__img_shineRedRock_5_png___default.a;
            break;
        case 5:
            redRockWrapper.className = 'redRock_5';
            redRock.src = __WEBPACK_IMPORTED_MODULE_6__img_shineRedRock_5_png___default.a;
            break;
        case 6:
            redRockWrapper.className = 'redRock_6';
            redRock.src = __WEBPACK_IMPORTED_MODULE_7__img_shineRedRock_6_png___default.a;
            break;
        case 7:
            redRockWrapper.className = 'redRock_7';
            redRock.src = __WEBPACK_IMPORTED_MODULE_8__img_shineRedRock_7_png___default.a;
            break;
        case 8:
            redRockWrapper.className = 'redRock_8';
            redRock.src = __WEBPACK_IMPORTED_MODULE_9__img_shineRedRock_8_png___default.a;
            break;
        case 9:
            redRockWrapper.className = 'redRock_9';
            redRock.src = __WEBPACK_IMPORTED_MODULE_10__img_shineRedRock_9_png___default.a;
            break;
        case 10:
            redRockWrapper.className = 'redRock_10';
            redRock.src = __WEBPACK_IMPORTED_MODULE_11__img_shineRedRock_10_png___default.a;
            break;
        default:
            redRockWrapper.className = 'redRock_10';
            redRock.src = __WEBPACK_IMPORTED_MODULE_11__img_shineRedRock_10_png___default.a;
            break;
    }
}


function shineWords() {
    var shineNum = 0;
    var ifAdd = true;
    setInterval(function() {
        if (ifAdd) {
            shineNum++;
        }
        if (shineNum === 11) {
            ifAdd = false;
        }
        if (!ifAdd) {
            shineNum--;
        }
        if (shineNum === 1) {
            ifAdd = true;
        }
        shineFlash(shineNum);
    }, 100);
}


//webSocket

var percentage = 0, //游戏进度
    average = 280, //人平均点击数
    clickNumber, //点击总量
    onlineNumber, //初始在线人数
    targetClickNumber; //目标点击量

// var url = 'ws://wx.idsbllp.cn/gavagame/cet/game' + window.location.search;
// var ws = new WebSocket(url);

//获取服务端消息
// ws.addEventListener('message', getMessage, false);

// ws.addEventListener('open', open, false);

// ws.addEventListener('error', getError, false);

var loopGet = setInterval(getMessageAjax, 300);

function getMessageAjax () {
    __WEBPACK_IMPORTED_MODULE_1__Ajax_js___default()({
        method: 'GET',
        url: 'https://wx.idsbllp.cn/gavagame/game2017/master/game',
        succeess: getMessage,
        error: save
    })
}

function getMessage(data) {
    //var data = event.data;
    var dataObj = JSON.parse(data);
    
    console.log(dataObj);

    onlineNumber = dataObj.count;
    targetClickNumber = onlineNumber * average;
    clickNumber = dataObj.clickCount;
    percentage = (clickNumber / targetClickNumber);

    if (percentage >= 1) {
        percentage = 1;
        under.style.display = 'none';
        shineWords();
        setTimeout(function() {
            ws.onclose = function() {
                console.log('connect closed');
            };
            window.location.href = '../view/end.html' + window.location.search;
        }, 10000);
    }
    percent.innerHTML = parseInt(percentage * 100) + '%';
    under.style.width = 36 * percentage + '%';

    for (var i = 0; i < users.length; i++) {
        users[i].src = dataObj.list[i].headimgurl;
        //users[i].src = 'http://old.cicphoto.com/newcicsite/syxy/tj/201408/W020140827418493810536.jpg'
    }

    if (percentage >= 0.25) {
        yellowLight[0].className = 'yellowLight firstLight';
        yellowLight[0].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
    }
    if (percentage >= 0.5) {
        yellowLight[1].className = 'yellowLight secondLight';
        yellowLight[1].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
    }
    if (percentage >= 0.75) {
        yellowLight[2].className = 'yellowLight thirdLight';
        yellowLight[2].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
    }
    if (percentage >= 0.95) {
        yellowLight[3].className = 'yellowLight fourthLight';
        yellowLight[3].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
    }

    movingSpeed = percentage / 2 + 0.1;
}


function open(evnet) {
    console.log(1);
}


function getError(event) {
    console.log(event.data);
    console.log(0);

    save();
}


function save() {
    setInterval(function() {
        percentage += 0.006;

        if (percentage >= 0.25) {
            yellowLight[0].className = 'yellowLight firstLight';
            yellowLight[0].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
        }
        if (percentage >= 0.5) {
            yellowLight[1].className = 'yellowLight secondLight';
            yellowLight[1].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
        }
        if (percentage >= 0.75) {
            yellowLight[2].className = 'yellowLight thirdLight';
            yellowLight[2].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
        }
        if (percentage >= 0.95) {
            yellowLight[3].className = 'yellowLight fourthLight';
            yellowLight[3].src = __WEBPACK_IMPORTED_MODULE_12__img_shineYellow_0_png___default.a;
        }

        if (percentage > 1) {
            percentage = 1;
            under.style.display = 'none';
            shineWords();
            setTimeout(function() {
                window.location.href = '../view/end.html' + window.location.search;
            }, 10000);

            ws.onclose = function() {
                console.log('connect closed');
            };
        }
        
        under.style.width = 36 * percentage + '%';
        movingSpeed = percentage / 2 + 0.1;
        percent.innerHTML = parseInt(percentage * 100) + '%';

        for (var i = 0; i < users.length; i++) {
            //users[i].src = ;
        }
    }, 400);

}


window.onunload = function() {
    ws.onclose = function() {
        console.log('Connection closed');
    };
}

save();




//The end

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(8, function() {
			var newContent = __webpack_require__(8);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e75209174c8bac229ef9938b35860e3f.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "142fd88b271c3673d49fb8737b65f9d0.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14985a288fc8aaa707b9ac36a5d0ac49.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b28d8bf221dc8e33b8d9a5b68973b084.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9cfc0774045bcf566e1daef4aed9e87d.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "caba156dd796843d91a60fcd53ceab43.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4b3bf8902642346efd1e3536117c6a0d.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e54f1f0f867a5a0b3aed9aa28c07b305.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6c1ae2baac063ff61fb5f34fcf1c1a80.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "40fced4d3f2cbfcb3fab79bd33fc56e0.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c02bf98ad3cca7eae00357a1727210c8.png";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI0YzI3MDI1YTAyOGU4MjQxZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC/ljY7lurfmtbfmiqXkvZNXMTIoMSkv5Y2O5bq35rW35oql5L2TVzEyLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BamF4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvcGxheWluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXlpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9wbGF5aW5nLmNzcz8zZjUzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmlnQmFja2dyb3VuZF8wLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2hlYWRfOTkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzEucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzYucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzgucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVSZWRSb2NrXzEwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lWWVsbG93XzAucG5nIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQTJEO0FBQzNEO0FBQ0E7QUFDQSxXQUFHOztBQUVILG9EQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7OztBQUlBO0FBQ0Esc0RBQThDO0FBQzlDO0FBQ0E7QUFDQSxvQ0FBNEI7QUFDNUIscUNBQTZCO0FBQzdCLHlDQUFpQzs7QUFFakMsK0NBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUFzQztBQUN0QztBQUNBO0FBQ0EscUNBQTZCO0FBQzdCLHFDQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQSw0REFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1Q0FBdUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1Q0FBdUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGdCQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFhLHdDQUF3QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBLDhDQUFzQyx1QkFBdUI7O0FBRTdEO0FBQ0E7Ozs7Ozs7QUNudEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoV0EsZ0Y7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBLFM7Ozs7OztBQ2xYQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQSxnRjs7Ozs7O0FDQUEsaUNBQWlDLGdyUjs7Ozs7O0FDQWpDLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxpQ0FBaUMsZzVNIiwiZmlsZSI6ImpzL3BsYXlpbmcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0dGhpc1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSBcclxuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdFx0aWYocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0fSA7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gXHRcdHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcclxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xyXG4gXHRcdDtcclxuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XHJcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0aWYodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcclxuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcclxuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XHJcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdGlmKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcclxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XHJcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxyXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuIFx0XHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcclxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlKSB7XHJcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm47XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG5cbiBcdFxyXG4gXHRcclxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xyXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjIyNGMyNzAyNWEwMjhlODI0MWQ0XCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XHJcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xyXG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0aWYoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcclxuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XHJcbiBcdFx0XHRpZihtZS5ob3QuYWN0aXZlKSB7XHJcbiBcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcclxuIFx0XHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPCAwKVxyXG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XHJcbiBcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXF1ZXN0ICsgXCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICsgbW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XHJcbiBcdFx0fTtcclxuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xyXG4gXHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xyXG4gXHRcdFx0XHR9LFxyXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH07XHJcbiBcdFx0Zm9yKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xyXG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInJlYWR5XCIpXHJcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XHJcbiBcdFx0XHRcdHRocm93IGVycjtcclxuIFx0XHRcdH0pO1xyXG4gXHRcclxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcclxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xyXG4gXHRcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XHJcbiBcdFx0XHRcdFx0aWYoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xyXG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fTtcclxuIFx0XHRyZXR1cm4gZm47XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhvdCA9IHtcclxuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcclxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXHJcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcclxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxyXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxyXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxyXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcclxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcclxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcclxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRpZighbCkgcmV0dXJuIGhvdFN0YXR1cztcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcclxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxyXG4gXHRcdH07XHJcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xyXG4gXHRcdHJldHVybiBob3Q7XHJcbiBcdH1cclxuIFx0XHJcbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xyXG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcclxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcclxuIFx0fVxyXG4gXHRcclxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcclxuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XHJcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcclxuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3REZWZlcnJlZDtcclxuIFx0XHJcbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xyXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xyXG4gXHRcdHZhciBpc051bWJlciA9ICgraWQpICsgXCJcIiA9PT0gaWQ7XHJcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcImlkbGVcIikgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XHJcbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xyXG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoIXVwZGF0ZSkge1xyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XHJcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XHJcbiBcdFxyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xyXG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXHJcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcclxuIFx0XHRcdFx0fTtcclxuIFx0XHRcdH0pO1xyXG4gXHRcdFx0aG90VXBkYXRlID0ge307XHJcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDI7XHJcbiBcdFx0XHR7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3NcclxuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cclxuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcclxuIFx0XHRcdHJldHVybjtcclxuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGlmKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcclxuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcclxuIFx0XHRpZighaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xyXG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XHJcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XHJcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xyXG4gXHRcdGlmKCFkZWZlcnJlZCkgcmV0dXJuO1xyXG4gXHRcdGlmKGhvdEFwcGx5T25VcGRhdGUpIHtcclxuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXHJcbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cclxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcclxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcclxuIFx0XHRcdH0pLnRoZW4oXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdCk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XHJcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiBcdFxyXG4gXHRcdHZhciBjYjtcclxuIFx0XHR2YXIgaTtcclxuIFx0XHR2YXIgajtcclxuIFx0XHR2YXIgbW9kdWxlO1xyXG4gXHRcdHZhciBtb2R1bGVJZDtcclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcclxuIFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcclxuIFx0XHRcdFx0XHRpZDogaWRcclxuIFx0XHRcdFx0fTtcclxuIFx0XHRcdH0pO1xyXG4gXHRcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcclxuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xyXG4gXHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fbWFpbikge1xyXG4gXHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdGlmKCFwYXJlbnQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxyXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxyXG4gXHRcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcclxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xyXG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxyXG4gXHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFxyXG4gXHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxyXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXHJcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxyXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcclxuIFx0XHRcdH07XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XHJcbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XHJcbiBcdFx0XHRcdGlmKGEuaW5kZXhPZihpdGVtKSA8IDApXHJcbiBcdFx0XHRcdFx0YS5wdXNoKGl0ZW0pO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcclxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XHJcbiBcdFxyXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XHJcbiBcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCIpO1xyXG4gXHRcdH07XHJcbiBcdFxyXG4gXHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcclxuIFx0XHRcdFx0dmFyIHJlc3VsdDtcclxuIFx0XHRcdFx0aWYoaG90VXBkYXRlW2lkXSkge1xyXG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcclxuIFx0XHRcdFx0aWYocmVzdWx0LmNoYWluKSB7XHJcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHN3aXRjaChyZXN1bHQudHlwZSkge1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArIHJlc3VsdC5tb2R1bGVJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiIGluIFwiICsgcmVzdWx0LnBhcmVudElkICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGlzcG9zZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGRlZmF1bHQ6XHJcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGFib3J0RXJyb3IpIHtcclxuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcclxuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9BcHBseSkge1xyXG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdFx0XHRcdGZvcihtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihkb0Rpc3Bvc2UpIHtcclxuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxyXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRmb3IoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiYgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcclxuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcclxuIFx0XHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xyXG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xyXG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fSk7XHJcbiBcdFxyXG4gXHRcdHZhciBpZHg7XHJcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XHJcbiBcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0aWYoIW1vZHVsZSkgY29udGludWU7XHJcbiBcdFxyXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcclxuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XHJcbiBcdFx0XHRmb3IoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XHJcbiBcdFx0XHRcdGNiKGRhdGEpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcclxuIFx0XHJcbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxyXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcclxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXHJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXHJcbiBcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xyXG4gXHRcdFx0XHRpZighY2hpbGQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkge1xyXG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIGRlcGVuZGVuY3k7XHJcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKG1vZHVsZSkge1xyXG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGZvcihqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XHJcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcclxuIFx0XHRcdFx0XHRcdGlmKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XHJcbiBcdFxyXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXHJcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcbiBcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcclxuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XHJcbiBcdFx0XHRcdFx0XHRpZihjYikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihjYWxsYmFja3MuaW5kZXhPZihjYikgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcclxuIFx0XHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcclxuIFx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XHJcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIyKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0b3JnaW5hbEVycm9yOiBlcnIsIC8vIFRPRE8gcmVtb3ZlIGluIHdlYnBhY2sgNFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyMjtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcclxuIFx0XHRpZihlcnJvcikge1xyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcclxuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDI1KShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjI0YzI3MDI1YTAyOGU4MjQxZDQiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDkyNGFkMTE4N2U2NDJlMTI5OGZmMjgzZjc5ZGY5YzQudHRmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9udC/ljY7lurfmtbfmiqXkvZNXMTIoMSkv5Y2O5bq35rW35oql5L2TVzEyLnR0ZlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNCIsImZ1bmN0aW9uIGFqYXgoIG9wdHMgKSB7XG5cbiAgICAvLzEu6K6+572u6buY6K6k5Y+C5pWwXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLCAvL+ivt+axguaWueW8j1xuICAgICAgICB1cmw6ICcnLCAvL+WPkemAgeivt+axgueahOWcsOWdgFxuICAgICAgICBkYXRhOiAnJywgLy/lj5HpgIHmlbDmja5cbiAgICAgICAgYXN5bmM6IHRydWUsLy/mmK/lkKblvILmraVcbiAgICAgICAgY2FjaGU6IHRydWUsLy/mmK/lkKbnvJPlrZhcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLC8vaHR0cOWktOS/oeaBr1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH07XG5cbiAgICAvLzIu6KaG55uW5Y+C5pWwXG4gICAgZm9yKCB2YXIga2V5IGluIG9wdHMgKSB7XG4gICAgICAgIGRlZmF1bHRzW2tleV0gPSBvcHRzW2tleV07XG4gICAgfTtcblxuICAgIC8vMy7mlbDmja7lpITnkIZcbiAgICBpZiAoIHR5cGVvZiBkZWZhdWx0cy5kYXRhID09PSAnb2JqZWN0JyApIHsgLy/lpITnkIZkYXRhXG4gICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgZm9yKCB2YXIga2V5IGluIGRlZmF1bHRzLmRhdGEgKSB7XG4gICAgICAgICAgICBzdHIgKz0ga2V5ICsgJz0nICsgZGVmYXVsdHMuZGF0YVtrZXldICsgJyYnXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdHMuZGF0YSA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgIH07XG5cbiAgICBkZWZhdWx0cy5tZXRob2QgPSBkZWZhdWx0cy5tZXRob2QudG9VcHBlckNhc2UoKTsgIC8v6K+35rGC5pa55byP5a2X56ym6L2s5o2i5oiQ5aSn5YaZXG5cbiAgICBkZWZhdWx0cy5jYWNoZSA9IGRlZmF1bHRzLmNhY2hlID8gJycgOiAnJicgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgLy/lpITnkIYg57yT5a2YXG5cblxuICAgIGlmICggZGVmYXVsdHMubWV0aG9kID09PSAnR0VUJyAmJiAoZGVmYXVsdHMuZGF0YSB8fCBkZWZhdWx0cy5jYWNoZSkgKSB7XG4gICAgICAgIGRlZmF1bHRzLnVybCArPSAnPycgKyBkZWZhdWx0cy5kYXRhICsgZGVmYXVsdHMuY2FjaGU7XG4gICAgfTtcblxuICAgIC8vNC7nvJblhplhamF4XG4gICAgdmFyIG9YaHIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBBY3RpdmVYb2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuXG5cbiAgICAvL+S4juacjeWKoeWZqOW7uueri+mTvuaOpe+8jOWRiuivieacjeWKoeWZqOS9oOimgeWBmuS7gOS5iFxuICAgIG9YaHIub3BlbihkZWZhdWx0cy5tZXRob2QsIGRlZmF1bHRzLnVybCwgZGVmYXVsdHMuYXN5bmMpO1xuXG4gICAgLy/lj5HpgIHor7fmsYJcbiAgICBpZiAoIGRlZmF1bHRzLm1ldGhvZCA9PT0gJ0dFVCcgKSB7XG4gICAgICAgIG9YaHIuc2VuZChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvWGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgZGVmYXVsdHMuY29udGVudFR5cGUpO1xuICAgICAgICBvWGhyLnNlbmQoZGVmYXVsdHMuZGF0YSk7XG4gICAgfVxuXG4gICAgLy/nrYnku6PmnI3liqHlmajlm57ppohcbiAgICBvWGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCBvWGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG4gICAgICAgICAgICBpZiAob1hoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnN1Y2Nlc3MuY2FsbChvWGhyLCBvWGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzLmVycm9yKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWpheDtcblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9BamF4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIS0hCJztcXG4gICAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udC/ljY7lurfmtbfmiqXkvZNXMTIoMSkv5Y2O5bq35rW35oql5L2TVzEyLnR0ZlwiKSArIFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5odG1se1xcblxcbn1cXG5ib2R5e1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0YmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9iaWdCYWNrZ3JvdW5kXzAuanBnXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xcbn1cXG5cXG4ubWFpbkJvZHlXcmFwcGVyIHtcXG5cXHRtaW4td2lkdGg6IDE0MzBweDtcXG5cXHRtYXJnaW4tdG9wOiAzJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDMwO1xcbn1cXG5cXG4udG9wVGl0bGV7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAzMCU7XFxuXFx0bWFyZ2luOjAgYXV0bztcXG5cXHRtYXJnaW4tdG9wOiAwLjUlO1xcbn1cXG5cXG4udG9wVGl0bGUgLnRpdGxle1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvZ3Jlc3N7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMjUlO1xcblxcdGxlZnQ6IDc2JTtcXG5cXHRjb2xvcjogeWVsbG93O1xcblxcdGZvbnQtZmFtaWx5OiBIS0hCO1xcblxcdGZvbnQtc2l6ZTogMnZ3O1xcblxcdGxpbmUtaGVpZ2h0OiAxNDAlO1xcblxcdHRleHQtYWxpZ24tbGFzdDogbGVmdDtcXG59XFxuXFxuaW1nLlVGT3tcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDAlO1xcblxcdHRvcDogMyU7XFxuXFx0bGVmdDogMTAlO1xcblxcdHRyYW5zaXRpb246IGFsbCAycztcXG59XFxuXFxuaW1nLm1vdmluZ1VGT3tcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDglO1xcblxcdHRvcDogMjElO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMnM7XFxufVxcblxcbi5zcGFjZVN0YXRpb257XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA2MiU7XFxuXFx0bWFyZ2luLWxlZnQ6IC02MCU7XFxuXFx0bWFyZ2luLXRvcDogIC05LjklO1xcblxcdC8qdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMnMsIG1hcmdpbi10b3AgMnM7Ki9cXG59XFxuXFxuLm1vdmluZ1NwYWNlU3RhdGlvbntcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDYyJTtcXG5cXHRtYXJnaW4tbGVmdDogMTklO1xcblxcdG1hcmdpbi10b3A6ICAtMS45JTtcXG5cXHR0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCA0cywgbWFyZ2luLXRvcCAycztcXG59XFxuXFxuI3N0YXRpb257XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi55ZWxsb3dMaWdodHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDUlO1xcblxcdHRvcDogNjklO1xcbn1cXG5cXG5cXG5pbWcuZmlyc3R7XFxuXFx0bGVmdDogOCU7XFxufVxcbmltZy5zZWNvbmR7XFxuXFx0bGVmdDogMTklO1xcbn1cXG5pbWcudGhpcmR7XFxuXFx0bGVmdDogNzclO1xcbn1cXG5pbWcuZm91cnRoe1xcblxcdGxlZnQ6IDg4JTtcXG59XFxuXFxuaW1nLmZpcnN0TGlnaHR7XFxuXFx0d2lkdGg6IDEwJTtcXG5cXHRsZWZ0OiA3JTtcXG5cXHR0b3A6IDYxJTtcXG59XFxuXFxuaW1nLnNlY29uZExpZ2h0e1xcblxcdHdpZHRoOiAxMCU7XFxuXFx0dG9wOiA2MSU7XFxuXFx0bGVmdDogMTclO1xcbn1cXG5pbWcudGhpcmRMaWdodHtcXG5cXHR3aWR0aDogMTAlO1xcblxcdHRvcDogNjElO1xcblxcdGxlZnQ6IDc1JTtcXG59XFxuaW1nLmZvdXJ0aExpZ2h0e1xcblxcdHdpZHRoOiAxMCU7XFxuXFx0dG9wOiA2MSU7XFxuXFx0bGVmdDogODYlO1xcbn1cXG5cXG4uYXN0cm9uYXV0e1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTEuNSU7XFxuXFx0bWFyZ2luLWxlZnQ6IDc0JTtcXG5cXHRtYXJnaW4tdG9wOiAtNS42JTtcXG59XFxuXFxuLmFzdHJvbmF1dCBpbWd7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi51c2VySGVhZHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRoZWlnaHQ6IDkuNiU7XFxuXFx0dG9wOiA2NiU7XFxuXFx0bGVmdDogNC41JTtcXG59XFxuXFxuLmhlYWRze1xcblxcdHdpZHRoOiA1LjAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDMuNyU7XFxuXFx0bWFyZ2luLXRvcDogMS4yJTtcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2hlYWRfOTkucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcbi5vbmV7XFxuXFx0bWFyZ2luLWxlZnQ6IDQuOSU7XFxufVxcbi50d297XFxuXFx0bWFyZ2luLWxlZnQ6IDMuOCU7XFxufVxcblxcbi5mb3Vye1xcblxcdG1hcmdpbi1sZWZ0OiAzLjUlO1xcbn1cXG4uaGVhZHMgaW1ne1xcblxcdHdpZHRoOiA2NSU7XFxuXFx0aGVpZ2h0OiA1NSU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0bWFyZ2luLXRvcDogMTclO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI2ZpcnN0e1xcblxcdG1hcmdpbi1sZWZ0OiA5LjElO1xcbn1cXG5cXG4uYmlnUGxhbmV7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbi10b3A6IC0yMCU7XFxuXFx0ei1pbmRleDogMDtcXG59XFxuXFxuLnJlZFJvY2t7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAzNyU7XFxuXFx0dG9wOiA2MS41JTtcXG5cXHRsZWZ0OiAzMi41JTtcXG5cXHR6LWluZGV4OiA5OTk7XFxufVxcblxcbmhye1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR6LWluZGV4OiA5OTk5OTk5OTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbmhyLnRvcHtcXG5cXHR0b3A6IDY0LjUlO1xcbn1cXG5cXG5oci5idXR0b217XFxuXFx0dG9wOiA4NSU7XFxufVxcbi5yb2Nre1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiA5OTk7XFxufVxcblxcbi5yZWRSb2NrXzF7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAzNi44JTtcXG5cXHR0b3A6IDYyLjUlO1xcblxcdGxlZnQ6IDMyLjUyNSU7XFxuXFx0ei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucmVkUm9ja18ye1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMzguOCU7XFxuXFx0dG9wOiA1OS44JTtcXG5cXHRsZWZ0OiAzMS40NCU7XFxuXFx0ei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucmVkUm9ja18ze1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogNDAuNCU7XFxuXFx0dG9wOiA1Ny4wJTtcXG5cXHRsZWZ0OiAzMC41OSU7XFxuXFx0ei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucmVkUm9ja180e1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogNDIuNjAlO1xcblxcdHRvcDogNTQuMCU7XFxuXFx0bGVmdDogMjkuNDQlO1xcblxcdHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnJlZFJvY2tfNXtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDQ0LjU1JTtcXG5cXHR0b3A6IDUwLjclO1xcblxcdGxlZnQ6IDI4LjUzJTtcXG5cXHR6LWluZGV4OiA5OTk7XFxufVxcblxcbi5yZWRSb2NrXzZ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiA0Ni4zJTtcXG5cXHR0b3A6IDQ3LjclO1xcblxcdGxlZnQ6IDI3LjYlO1xcblxcdHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnJlZFJvY2tfN3tcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDQ3LjklO1xcblxcdHRvcDogNDUuMyU7XFxuXFx0bGVmdDogMjYuNzMlO1xcblxcdHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnJlZFJvY2tfOHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDQ5LjklO1xcblxcdHRvcDogNDIuMyU7XFxuXFx0bGVmdDogMjUuNyU7XFxuXFx0ei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucmVkUm9ja185e1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogNTEuOSU7XFxuXFx0dG9wOiAzOSU7XFxuXFx0bGVmdDogMjQuNyU7XFxuXFx0ei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucmVkUm9ja18xMHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDUzLjUwJTtcXG5cXHR0b3A6IDM2LjUlO1xcblxcdGxlZnQ6IDIzLjklO1xcblxcdHotaW5kZXg6IDk5OTtcXG59XFxuXFxuXFxuLnVuZGVye1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNjMlO1xcblxcdGxlZnQ6IDMzJTtcXG5cXHR3aWR0aDogMCU7XFxuXFx0aGVpZ2h0OiAyMiU7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmOTNhMCwgI2VjNjE3Myk7XFxuXFx0ei1pbmRleDogOTtcXG5cXHR0cmFuc2l0aW9uOiB3aWR0aCAwLjU7XFxufVxcblxcbi51bmRlciBpbWd7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwMHB4KSBhbmQgKG1heC13aWR0aDoxNTUwcHgpIHtcXG4gICAgLmJpZ1BsYW5lIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMSU7XFxuICAgIH1cXG4gICAgLm1vdmluZ1NwYWNlU3RhdGlvbntcXG4gICAgXFx0bWFyZ2luLXRvcDogNiU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNTUwcHgpIGFuZCAobWF4LXdpZHRoOjE3MDBweCkge1xcbiAgICAuYmlnUGxhbmUge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTE5JTtcXG4gICAgfVxcbiAgICAubW92aW5nU3BhY2VTdGF0aW9ue1xcbiAgICBcXHRtYXJnaW4tdG9wOiA0JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE3MDBweCkgYW5kIChtYXgtd2lkdGg6MTkwMHB4KSB7XFxuICAgIC5iaWdQbGFuZSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTclO1xcbiAgICB9XFxuICAgIC5tb3ZpbmdTcGFjZVN0YXRpb257XFxuICAgIFxcdG1hcmdpbi10b3A6IDIlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTkwMHB4KSBhbmQgKG1heC13aWR0aDoyNDAwcHgpIHtcXG4gICAgLmJpZ1BsYW5lIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNSU7XFxuICAgIH1cXG4gICAgLm1vdmluZ1NwYWNlU3RhdGlvbntcXG4gICAgXFx0bWFyZ2luLXRvcDogMS44JTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9wbGF5aW5nLmNzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgJy4uL2Nzcy9wbGF5aW5nLmNzcyc7XG5pbXBvcnQgYWpheCBmcm9tICcuL0FqYXguanMnO1xuXG5pbXBvcnQgc2hpbmVfMSBmcm9tICcuLi9pbWcvc2hpbmVSZWRSb2NrXzEucG5nJztcbmltcG9ydCBzaGluZV8yIGZyb20gJy4uL2ltZy9zaGluZVJlZFJvY2tfMi5wbmcnO1xuaW1wb3J0IHNoaW5lXzMgZnJvbSAnLi4vaW1nL3NoaW5lUmVkUm9ja18zLnBuZyc7XG5pbXBvcnQgc2hpbmVfNCBmcm9tICcuLi9pbWcvc2hpbmVSZWRSb2NrXzQucG5nJztcbmltcG9ydCBzaGluZV81IGZyb20gJy4uL2ltZy9zaGluZVJlZFJvY2tfNS5wbmcnO1xuaW1wb3J0IHNoaW5lXzYgZnJvbSAnLi4vaW1nL3NoaW5lUmVkUm9ja182LnBuZyc7XG5pbXBvcnQgc2hpbmVfNyBmcm9tICcuLi9pbWcvc2hpbmVSZWRSb2NrXzcucG5nJztcbmltcG9ydCBzaGluZV84IGZyb20gJy4uL2ltZy9zaGluZVJlZFJvY2tfOC5wbmcnO1xuaW1wb3J0IHNoaW5lXzkgZnJvbSAnLi4vaW1nL3NoaW5lUmVkUm9ja185LnBuZyc7XG5pbXBvcnQgc2hpbmVfMTAgZnJvbSAnLi4vaW1nL3NoaW5lUmVkUm9ja18xMC5wbmcnO1xuXG5pbXBvcnQgeWVsbG93TGlnaHRfMCBmcm9tICcuLi9pbWcvc2hpbmVZZWxsb3dfMC5wbmcnO1xuXG52YXIgdyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG52YXIgaCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XG52YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXG4vL+WKqOaAgeiuvuWumuaAu+S9k+mrmOW6plxudmFyIG1haW5Cb2R5V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQm9keVdyYXBwZXInKTtcbi8vbWFpbkJvZHlXcmFwcGVyLnN0eWxlLmhlaWdodCA9IHcgLyAyLjQgKyAncHgnO1xubWFpbkJvZHlXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGJvZHkuc3R5bGUuaGVpZ2h0ID0gaCAtIDUgKyAncHgnO1xuXG4vL1VGT1xudmFyIFVGTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5VRk8nKTtcblVGTy5zdHlsZS50b3AgPSAnMjElJztcbi8v5LiK5LiL5rWu5Yqo5Ye95pWwXG5mdW5jdGlvbiBtb3ZpbmcodGFyZ2V0LCBpbml0LCByYW5nZSwgdGltZSkge1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGFyZ2V0LnN0eWxlLnRvcCA9PT0gaW5pdCkge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IHJhbmdlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5zdHlsZS50b3AgPT09IHJhbmdlKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gaW5pdDtcbiAgICAgICAgfVxuICAgIH0sIHRpbWUpO1xufVxuXG5tb3ZpbmcoVUZPLCAnMjElJywgJzI3JScsIDEyMDApO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIFVGTy5jbGFzc05hbWUgPSAnbW92aW5nVUZPJztcbn0sIDMwMDApO1xuXG5cbnZhciBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZVN0YXRpb24nKTtcbnZhciByYW5nZSA9ICcnO1xudmFyIGluaXQgPSAnJztcblxuaWYgKHcgPD0gMTU1MCkge1xuICAgIHNwYWNlLnN0eWxlLm1hcmdpblRvcCA9ICc2JSc7XG4gICAgaW5pdCA9ICc2JSc7XG4gICAgcmFuZ2UgPSAnOSUnO1xufVxuaWYgKHcgPiAxNTUwICYmIHcgPD0gMTcwMCkge1xuICAgIHNwYWNlLnN0eWxlLm1hcmdpblRvcCA9ICc0JSc7XG4gICAgaW5pdCA9ICc0JSc7XG4gICAgcmFuZ2UgPSAnMTAlJztcbn1cbmlmICh3ID4gMTcwMCAmJiB3IDw9IDE5MDApIHtcbiAgICBzcGFjZS5zdHlsZS5tYXJnaW5Ub3AgPSAnMiUnO1xuICAgIGluaXQgPSAnMiUnO1xuICAgIHJhbmdlID0gJzclJztcbn1cbmlmICh3ID4gMTkwMCkge1xuICAgIHNwYWNlLnN0eWxlLm1hcmdpblRvcCA9ICcxLjglJztcbiAgICBpbml0ID0gJzEuOCUnO1xuICAgIHJhbmdlID0gJzUlJztcbn1cblxuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoc3BhY2Uuc3R5bGUubWFyZ2luVG9wID09PSBpbml0KSB7XG4gICAgICAgIHNwYWNlLnN0eWxlLm1hcmdpblRvcCA9IHJhbmdlO1xuICAgIH0gZWxzZSBpZiAoc3BhY2Uuc3R5bGUubWFyZ2luVG9wID09PSByYW5nZSkge1xuICAgICAgICBzcGFjZS5zdHlsZS5tYXJnaW5Ub3AgPSBpbml0O1xuICAgIH1cbn0sIDEyMDApO1xuXG5cbi8v6IOM5pmv56e75YqoXG52YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbnZhciBib2R5UG9zaXRpb24gPSAwO1xudmFyIG1vdmluZ1NwZWVkID0gMC4xO1xuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgYm9keVBvc2l0aW9uICs9IG1vdmluZ1NwZWVkO1xuICAgIGlmIChib2R5UG9zaXRpb24gPj0gODguNykge1xuICAgICAgICBib2R5UG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGJvZHlQb3NpdGlvbiArICclJztcbn0sIDEwKTtcblxuLy9zcGFjZSBzdGF0aW9uXG52YXIgc3BhY2VTdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlU3RhdGlvbicpO1xudmFyIHllbGxvd0xpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllbGxvd0xpZ2h0Jyk7XG5cblxuc3BhY2VTdGF0aW9uLmNsYXNzTmFtZSA9ICdtb3ZpbmdTcGFjZVN0YXRpb24nO1xuXG4vL3JlZFJvY2sgYW5kIHByb2dyZXNzXG52YXIgcmVkUm9ja1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkUm9jaycpO1xudmFyIHJlZFJvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9jaycpO1xudmFyIHVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZGVyJyk7XG52YXIgcGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpO1xudmFyIHVzZXJIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJIZWFkJyk7XG52YXIgdXNlcnMgPSB1c2VySGVhZC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcblxuLy9jb25zb2xlLmxvZyh1c2VySGVhZHNbMF0uY2hpbGROb2Rlcyk7XG5cbnZhciByZWRSb2NrUHJvZ3Jlc3MgPSAwO1xuXG4vLyB2YXIgcHJvZ3Jlc3NUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXG4vLyAgICAgcmVkUm9ja1Byb2dyZXNzICs9IDAuMDM7XG4vLyAgICAgcGVyY2VudC5pbm5lckhUTUwgPSBwYXJzZUludCgxMDAgLyAzNiAqIHJlZFJvY2tQcm9ncmVzcykgKyAnJSc7XG5cbi8vICAgICBpZiAocmVkUm9ja1Byb2dyZXNzID49IDkpIHtcbi8vICAgICAgICAgeWVsbG93TGlnaHRbMF0uY2xhc3NOYW1lID0gJ3llbGxvd0xpZ2h0IGZpcnN0TGlnaHQnO1xuLy8gICAgICAgICB5ZWxsb3dMaWdodFswXS5zcmMgPSB5ZWxsb3dMaWdodF8wO1xuLy8gICAgIH1cbi8vICAgICBpZiAocmVkUm9ja1Byb2dyZXNzID49IDE4KSB7XG4vLyAgICAgICAgIHllbGxvd0xpZ2h0WzFdLmNsYXNzTmFtZSA9ICd5ZWxsb3dMaWdodCBzZWNvbmRMaWdodCc7XG4vLyAgICAgICAgIHllbGxvd0xpZ2h0WzFdLnNyYyA9IHllbGxvd0xpZ2h0XzA7XG4vLyAgICAgfVxuLy8gICAgIGlmIChyZWRSb2NrUHJvZ3Jlc3MgPj0gMjcpIHtcbi8vICAgICAgICAgeWVsbG93TGlnaHRbMl0uY2xhc3NOYW1lID0gJ3llbGxvd0xpZ2h0IHRoaXJkTGlnaHQnO1xuLy8gICAgICAgICB5ZWxsb3dMaWdodFsyXS5zcmMgPSB5ZWxsb3dMaWdodF8wO1xuLy8gICAgIH1cbi8vICAgICBpZiAocmVkUm9ja1Byb2dyZXNzID49IDMzKSB7XG4vLyAgICAgICAgIHllbGxvd0xpZ2h0WzNdLmNsYXNzTmFtZSA9ICd5ZWxsb3dMaWdodCBmb3VydGhMaWdodCc7XG4vLyAgICAgICAgIHllbGxvd0xpZ2h0WzNdLnNyYyA9IHllbGxvd0xpZ2h0XzA7XG4vLyAgICAgfVxuXG4vLyAgICAgbW92aW5nU3BlZWQgPSByZWRSb2NrUHJvZ3Jlc3MgLyA5OSArIDAuMTtcbi8vICAgICBpZiAocmVkUm9ja1Byb2dyZXNzID49IDM2KSB7XG4vLyAgICAgICAgIHJlZFJvY2tQcm9ncmVzcyA9IDM2O1xuLy8gICAgICAgICBzaGluZVdvcmRzKCk7XG4vLyAgICAgICAgIHVuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3NUaW1lcik7XG4vLyAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi92aWV3L2VuZC5odG1sJyArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4vLyAgICAgICAgIH0sIDEwMDAwKTtcbi8vICAgICB9XG4vLyAgICAgdW5kZXIuc3R5bGUud2lkdGggPSByZWRSb2NrUHJvZ3Jlc3MgKyAnJSc7XG4vLyB9LCAyMCk7XG5cblxuZnVuY3Rpb24gc2hpbmVGbGFzaChzaGluZU51bSkge1xuICAgIHN3aXRjaCAoc2hpbmVOdW0pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfMSc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfMic7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfMyc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfNSc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfNSc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfNic7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfNyc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfOCc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmVkUm9ja1dyYXBwZXIuY2xhc3NOYW1lID0gJ3JlZFJvY2tfOSc7XG4gICAgICAgICAgICByZWRSb2NrLnNyYyA9IHNoaW5lXzk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHJlZFJvY2tXcmFwcGVyLmNsYXNzTmFtZSA9ICdyZWRSb2NrXzEwJztcbiAgICAgICAgICAgIHJlZFJvY2suc3JjID0gc2hpbmVfMTA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlZFJvY2tXcmFwcGVyLmNsYXNzTmFtZSA9ICdyZWRSb2NrXzEwJztcbiAgICAgICAgICAgIHJlZFJvY2suc3JjID0gc2hpbmVfMTA7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc2hpbmVXb3JkcygpIHtcbiAgICB2YXIgc2hpbmVOdW0gPSAwO1xuICAgIHZhciBpZkFkZCA9IHRydWU7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpZkFkZCkge1xuICAgICAgICAgICAgc2hpbmVOdW0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpbmVOdW0gPT09IDExKSB7XG4gICAgICAgICAgICBpZkFkZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaWZBZGQpIHtcbiAgICAgICAgICAgIHNoaW5lTnVtLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaW5lTnVtID09PSAxKSB7XG4gICAgICAgICAgICBpZkFkZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2hpbmVGbGFzaChzaGluZU51bSk7XG4gICAgfSwgMTAwKTtcbn1cblxuXG4vL3dlYlNvY2tldFxuXG52YXIgcGVyY2VudGFnZSA9IDAsIC8v5ri45oiP6L+b5bqmXG4gICAgYXZlcmFnZSA9IDI4MCwgLy/kurrlubPlnYfngrnlh7vmlbBcbiAgICBjbGlja051bWJlciwgLy/ngrnlh7vmgLvph49cbiAgICBvbmxpbmVOdW1iZXIsIC8v5Yid5aeL5Zyo57q/5Lq65pWwXG4gICAgdGFyZ2V0Q2xpY2tOdW1iZXI7IC8v55uu5qCH54K55Ye76YePXG5cbi8vIHZhciB1cmwgPSAnd3M6Ly93eC5pZHNibGxwLmNuL2dhdmFnYW1lL2NldC9nYW1lJyArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4vLyB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XG5cbi8v6I635Y+W5pyN5Yqh56uv5raI5oGvXG4vLyB3cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZ2V0TWVzc2FnZSwgZmFsc2UpO1xuXG4vLyB3cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgb3BlbiwgZmFsc2UpO1xuXG4vLyB3cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGdldEVycm9yLCBmYWxzZSk7XG5cbnZhciBsb29wR2V0ID0gc2V0SW50ZXJ2YWwoZ2V0TWVzc2FnZUFqYXgsIDMwMCk7XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2VBamF4ICgpIHtcbiAgICBhamF4KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93eC5pZHNibGxwLmNuL2dhdmFnYW1lL2dhbWUyMDE3L21hc3Rlci9nYW1lJyxcbiAgICAgICAgc3VjY2Vlc3M6IGdldE1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiBzYXZlXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZShkYXRhKSB7XG4gICAgLy92YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgdmFyIGRhdGFPYmogPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGRhdGFPYmopO1xuXG4gICAgb25saW5lTnVtYmVyID0gZGF0YU9iai5jb3VudDtcbiAgICB0YXJnZXRDbGlja051bWJlciA9IG9ubGluZU51bWJlciAqIGF2ZXJhZ2U7XG4gICAgY2xpY2tOdW1iZXIgPSBkYXRhT2JqLmNsaWNrQ291bnQ7XG4gICAgcGVyY2VudGFnZSA9IChjbGlja051bWJlciAvIHRhcmdldENsaWNrTnVtYmVyKTtcblxuICAgIGlmIChwZXJjZW50YWdlID49IDEpIHtcbiAgICAgICAgcGVyY2VudGFnZSA9IDE7XG4gICAgICAgIHVuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNoaW5lV29yZHMoKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdCBjbG9zZWQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi92aWV3L2VuZC5odG1sJyArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gICAgcGVyY2VudC5pbm5lckhUTUwgPSBwYXJzZUludChwZXJjZW50YWdlICogMTAwKSArICclJztcbiAgICB1bmRlci5zdHlsZS53aWR0aCA9IDM2ICogcGVyY2VudGFnZSArICclJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXNlcnNbaV0uc3JjID0gZGF0YU9iai5saXN0W2ldLmhlYWRpbWd1cmw7XG4gICAgICAgIC8vdXNlcnNbaV0uc3JjID0gJ2h0dHA6Ly9vbGQuY2ljcGhvdG8uY29tL25ld2NpY3NpdGUvc3l4eS90ai8yMDE0MDgvVzAyMDE0MDgyNzQxODQ5MzgxMDUzNi5qcGcnXG4gICAgfVxuXG4gICAgaWYgKHBlcmNlbnRhZ2UgPj0gMC4yNSkge1xuICAgICAgICB5ZWxsb3dMaWdodFswXS5jbGFzc05hbWUgPSAneWVsbG93TGlnaHQgZmlyc3RMaWdodCc7XG4gICAgICAgIHllbGxvd0xpZ2h0WzBdLnNyYyA9IHllbGxvd0xpZ2h0XzA7XG4gICAgfVxuICAgIGlmIChwZXJjZW50YWdlID49IDAuNSkge1xuICAgICAgICB5ZWxsb3dMaWdodFsxXS5jbGFzc05hbWUgPSAneWVsbG93TGlnaHQgc2Vjb25kTGlnaHQnO1xuICAgICAgICB5ZWxsb3dMaWdodFsxXS5zcmMgPSB5ZWxsb3dMaWdodF8wO1xuICAgIH1cbiAgICBpZiAocGVyY2VudGFnZSA+PSAwLjc1KSB7XG4gICAgICAgIHllbGxvd0xpZ2h0WzJdLmNsYXNzTmFtZSA9ICd5ZWxsb3dMaWdodCB0aGlyZExpZ2h0JztcbiAgICAgICAgeWVsbG93TGlnaHRbMl0uc3JjID0geWVsbG93TGlnaHRfMDtcbiAgICB9XG4gICAgaWYgKHBlcmNlbnRhZ2UgPj0gMC45NSkge1xuICAgICAgICB5ZWxsb3dMaWdodFszXS5jbGFzc05hbWUgPSAneWVsbG93TGlnaHQgZm91cnRoTGlnaHQnO1xuICAgICAgICB5ZWxsb3dMaWdodFszXS5zcmMgPSB5ZWxsb3dMaWdodF8wO1xuICAgIH1cblxuICAgIG1vdmluZ1NwZWVkID0gcGVyY2VudGFnZSAvIDIgKyAwLjE7XG59XG5cblxuZnVuY3Rpb24gb3Blbihldm5ldCkge1xuICAgIGNvbnNvbGUubG9nKDEpO1xufVxuXG5cbmZ1bmN0aW9uIGdldEVycm9yKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuZGF0YSk7XG4gICAgY29uc29sZS5sb2coMCk7XG5cbiAgICBzYXZlKCk7XG59XG5cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgcGVyY2VudGFnZSArPSAwLjAwNjtcblxuICAgICAgICBpZiAocGVyY2VudGFnZSA+PSAwLjI1KSB7XG4gICAgICAgICAgICB5ZWxsb3dMaWdodFswXS5jbGFzc05hbWUgPSAneWVsbG93TGlnaHQgZmlyc3RMaWdodCc7XG4gICAgICAgICAgICB5ZWxsb3dMaWdodFswXS5zcmMgPSB5ZWxsb3dMaWdodF8wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50YWdlID49IDAuNSkge1xuICAgICAgICAgICAgeWVsbG93TGlnaHRbMV0uY2xhc3NOYW1lID0gJ3llbGxvd0xpZ2h0IHNlY29uZExpZ2h0JztcbiAgICAgICAgICAgIHllbGxvd0xpZ2h0WzFdLnNyYyA9IHllbGxvd0xpZ2h0XzA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPj0gMC43NSkge1xuICAgICAgICAgICAgeWVsbG93TGlnaHRbMl0uY2xhc3NOYW1lID0gJ3llbGxvd0xpZ2h0IHRoaXJkTGlnaHQnO1xuICAgICAgICAgICAgeWVsbG93TGlnaHRbMl0uc3JjID0geWVsbG93TGlnaHRfMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudGFnZSA+PSAwLjk1KSB7XG4gICAgICAgICAgICB5ZWxsb3dMaWdodFszXS5jbGFzc05hbWUgPSAneWVsbG93TGlnaHQgZm91cnRoTGlnaHQnO1xuICAgICAgICAgICAgeWVsbG93TGlnaHRbM10uc3JjID0geWVsbG93TGlnaHRfMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwZXJjZW50YWdlID4gMSkge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IDE7XG4gICAgICAgICAgICB1bmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgc2hpbmVXb3JkcygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi92aWV3L2VuZC5odG1sJyArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgICAgICB9LCAxMDAwMCk7XG5cbiAgICAgICAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdCBjbG9zZWQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHVuZGVyLnN0eWxlLndpZHRoID0gMzYgKiBwZXJjZW50YWdlICsgJyUnO1xuICAgICAgICBtb3ZpbmdTcGVlZCA9IHBlcmNlbnRhZ2UgLyAyICsgMC4xO1xuICAgICAgICBwZXJjZW50LmlubmVySFRNTCA9IHBhcnNlSW50KHBlcmNlbnRhZ2UgKiAxMDApICsgJyUnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vdXNlcnNbaV0uc3JjID0gO1xuICAgICAgICB9XG4gICAgfSwgNDAwKTtcblxufVxuXG5cbndpbmRvdy5vbnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gY2xvc2VkJyk7XG4gICAgfTtcbn1cblxuc2F2ZSgpO1xuXG5cblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9wbGF5aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wbGF5aW5nLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wbGF5aW5nLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wbGF5aW5nLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL3BsYXlpbmcuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzUyMDkxNzRjOGJhYzIyOWVmOTkzOGIzNTg2MGUzZi5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvYmlnQmFja2dyb3VuZF8wLmpwZ1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR0VBQUFCckNBWUFBQUJubmV6RkFBQVp3MGxFUVZSNG5PMmRlNHdreDMzZlAxWFZqM25zNDI3dlJkN3hkZVR4Uko1SUthSnBNNkhBMklhRmhKWVZTWEdjQktLZEdFa1lSVWdzUUxSa2laSnRKVWlNV0xKaFI0WUJHUWJvd0FKaU00QWRXSUxzeUxHTnhJbHNVcFJwV3JMczQ0bVBPOTZSdk1mZTN1N2Q3TXowOUtPcThrZjN6UGIwZE0vTVB1NjUvZ0tGN3AzdFIzVjkrL2Y3VmYzNlY3OFNiVzI1RGlBMmNlNDEvNERPMWE1QUFjWEdGaVcvVDBPSUxka3ZrbkhOa0hNdGtGQnM2UHhXVFBoL0VjVUd6Mjl0NFc5UmN0eFZ3ZFVpWVZ5RFQxUHk1K1pSMXVpVFN2RzhzdXRkVmx4cEVzWTF1aXpaeW9wank0aVlSSUNwMkJiSnFKSVd1RXlrWENrU3locS8yTmlUeWtaSk1MbFM5ZmUwRWxPODE1YmdjcE5RYlB5eWhsZTVyU3I1VFRJcUpkT1FVR3gwelRBQlZXUVV6OHYvMXI5K1VVSTJoUTJUOEk2L1BGbjV2Nzk0MisxVmIzNis0WXZGS2Y3MmNpK3FQNzIwZXVUVlhueDRPZEYzZFl3OUVCcXp4eXBuM2lyWkFGblQyTHFDcnJVbUZJbHVLMnRYUFNuT042VjRjNmVqamgrcXVkLyt3TzdabzNmWHZJQTFJb3Jib29RVVNjdnZ3eFlUSVRZNlRpaVNrR3Q0bU56NFRtNDdLRjFqM1o4L3ZmeU9iM1RDUjVZUy9WQkhtM3N0dVAyTE9wNkhjbDJTTUNRSmV4aXQwMmFRQXVXNHVMVWFRa3AwSEtPVEpGK1p1S25raTNzYzlmVzNOLzMvOS9IOUM5K3NTeEZUTGlHNlVKTEMzMlcyWkZQWUZBbGpHajVQUUY2MU9JWGlBczZ2bkx0NCtBOHVkdDkzT2txK1A3TDJwckw3dWI2UGptTzZGMWV3eHBRZEFvRGorelFYZHBHRUlhYmlPRStJcy9zOTV5dnYzdG44M1grOWQvNDR3NUxSYi9oK2lRdC9iemtSR3lXaHFvdFoxUGxGZGROdmVIY3gxdldmZW4zcDNVZTcwV01kWSs2YmRFTy8yZVRpNlRmQlRxNnYzMnppejh3U2grSGtZNlU0NFNCV1EydHYxdGJ1VUVLc3pDcjU1dzgyL2YvMmM3ZnZlWmFVaENnclJTTHl0bUxEMkFnSmsvUjkvdTN2cXgwMzIzZVhFMTM3OGRmTy8rQ0xRZlRCeU5xYnA3MnBWNi9UV1Y0bUNYc1RqMjB1N0VyVlVrNGxiUVI3WFBYMHI5OTEwMy9jN3prZElDUWxvaThaUlluWU1OWkxRdG1iWDliREtlcDhGM0EvZHZMOGQvL0phdkRSME5nNzExdFI1VGk0dmsvWTdSQUhBVG9NVStzbzBpb0pLWEY4SDY4NWd4QmlLaW1ZQnJ0ZDlULys4TjVibmlRbDRiSVFzUkVTaXZxK3FHNkc5RDNnZm5tbHZmKy9uTG40NUVxaXYzZmRGUVNVbENncFVFTGdPQTZPVWlBRXhsaXMwUWdoUVFpd0JtTXN4bWkwdFJoajBkYWlqZG5VcS9vRE81di8vR2R1M2YwczBLT2NpRTNaaC9WMFVhc0lHRFIyV2ZtM0p4Yi8vblB0NEVsam1adjJSbElJWENWeHBFUUNzZFlrY1VKb05Gb2J6SmhHRlVJZ3BjQ1JDcVVrcmxMVVBSY0RKTm9RRzRPWndxN2s4Vnk3OXlQQUM1UVA3Q0Fsb285MUU3R1JjVUtlaEg1amU0RDM4WlBuLzg2ZmQ4Si8xdExtQVczdFRnSGFRRzNhQzN0SzRTbUp0Wll3aXVscFRWeWgxeVVncFVSbENsSmIwamZlV3JTMmFHM1NkeldENnppNGpxTGh1bGdoaUxRbTF0VzlyRHlXWS8xM1g0K1MyVnM5cHpnUXpBL2c4aGRibjNwWmh6cktOMzVmNVhpQXZ4anI1bys4Y3VZL25JLzFCOVp6YzBqZlhFOUpmS1hvUlJGaG5BdzF2QVJtWEljWng2R21KRFVsOGFSRVZqaTBqWVhRR0hyYTBOT2FkcUxweE1sUUMzbU9nK2U2K0s1THFEV1IxdVVYeTZFaHhiR2YyTC93eFBzWFprNENBV3MySXM3S2hydXUwNUtRVjBONTFlTUQ5WGNkZmVPekZ4TDlROVBldEE5UFNXcU9RN2NYRWlVSlNkWVlTc0FPejJQQmM1bHhGR0l6bjNSSWlXa25tdVVvNW1JWURRaHhIWVhudXRROGoxNmNFSThaZndBNFFpdyt0bnYydzAvY3ZQTXZXU01pMzMzZEVCSHJJU0V2QlY1VzZrK2VXbnJuLzdyWStZMXBMako0R0NtcE9Zb29qdWxGOGFEeG00N0RucHJMRHRldGZOTTNDMk5oSllvNTF3dnBaZXJJVllxYTcrRTZEcjFFazR3aFF3cFczN2R6NXNjK2ZjdXU1MGdOZFkveUhsUGV4VEVXMDlxRUtvUHMvbGxxdEthRzd5aGNJV2dIQVZHY3FwMm00N0MvN2pQcnF2VmNha09RQW5iNUxydDhsNVVvNFd6UUk5Q2F1QnZndXk3TmVvMUlpMG9WWlN5elgxcHUvNHFBRC8xMFNrU1Y5M1pxMzVLYzRwajgyS0EvTGhoMFExdmFQRFROalpRUU5EMFhqR0dsM1NHS0Uxd3B1V09temx2bUdsZUVnQ0oyZWc3M3pNMXdXN09Pa29Jd2pyblU3aUN4TkYwWFZhRUhEVFMrdU5MKy9PZk9yTnhQcXBMN21pSHZoQ3g2ZkNzeGlZU3lFZkhRQUN5eGRtSFNUUndwYVhvdVFhL0hhamZBV3N1QzczRmtyc21DNTA0Ni9iSkNDTmp0dXh5Wm0ySE9kZERHME9wMENjS1FodXVpS3ZTaXNjdzh2YlQ2K2QrNnNIbzdhMFQwdSt0bDMwQXFNYTBrRkZXUkE3aXZSMGxUcEhxd0VxNlUxQjFGcTl1bEY4Vkk0UFptblR1YXRjb0h2QnB3cGVEUWJJUDlqUm9DNkVVUjdTQ2c2Ym80c3J5WkltdjNmdTdNeWkrLzNJdm1XSk9HTWlMR1lod0paWU96b1VIWkIxODk5NlFkWTFkY0tmRWRSYXNiRE5UUDRia211L3lyKy9hUHcwMDFqME96ellGNmFuVzcxQjFWU1VUWDJIcytmR0x4MDR4S1ExRWxWWkl4alRvcVNvQUR1UC91eE9JUG5JMlQ5MWFkMk84QnJYYTd4RWxDVFVuZU10ZWs0Vng1M2I5ZXpMcUt3N05OWENtSjRvVFZJS0RoT3BXU2V5N1c3L3MzeDgrOWwyRVNwcGFHS2hLcXBNQUIzTjliNmR6OHRYYndaTlZGbFJRMFhJZlZJQ0JPTkRVbHVYdTJpWGNOcVo5SnFDdko0ZGttWHArSWJrRERxVGJXejNkNlAvazd5KzFiMklBMFRGSkhlUzlwWHhWNW56dTc4ckVxWDVBVWdycmpzSnFwSUU5S0RzMDJjYThqQXZyd2xlQ3UyUVpLUUJqSGRIb0JOYmRjK3hyTDdDK2Z2ZmpUYkVBYXlrZ29jMU1QYk1FblR5MDl2QlRyUjZzdVdNOUd3R0Vjb3dUY05kdTRyaVNnaUxxUzNEWFR6SXgxVEpJaytLcGNwYTRrK25zKzh0cmk5MUV1RFpWZDFrbnFhSWlFNVVUWC8wK3IrNm15QzBGcWlLMDE5S0lJZ051YkRlcHFtZzdZdFkwWlYzR2dXUWVnRS9Sd3BhdzAxRjlyOXo2Nm5PZzZ3eVFvMXFHT3h0cUNKMTQ3LzQ5Q1l3K1dYVWdJUWMxUmRIcnB4NVM5Tlk4ZDNyVVFaYmsxMk91NzdQQmNqTFcwZXdHMWlnNUdhT3dkVDd4Mi9vZW9Wa2tqWkZTcG94RlZ0SnpvMnJFZ2VyeXFrcDZTQkdGRW5DVDRTcksvUHJVSCs3ckJiWTBhVG1hb296akdxNUR5WTBIMHI1YmpwRWExU2hyQ05KS2dBT2ZKVTB2dmlhemRYM1pUS1FTdWxBTTFkRnVqZnRrY2NGY1RqaFRjMHZDQmREQlhjeHhrU1c4cHNuYi9UeHc3OVE4WWphV2FLQWxGSDlIUTZQaXZ1K0VQVjFXdWI0eU50ZXp3M0t2aUI3cFNXUEJjbXE1RG9nM2RYb2hiSVExSHU3M0hHQzhKQXlLcUpHSElIdnpjNmVYN3VzWWVLYnVaRkFJcEdFakJ6WFYvZzQ5My9lQkE5b3hoSE9NclZXcHR1OFllK2RtWFg3K2ZOYnRRNmRRclNrSlp4Snp6MVZid0Q2c3E1Q2xKTjR0czJPRTZOMFJ2YUJKbUhNVnM1dXdMd2dpM3JNc3FKRjlkYnIyZlVVa1lJYUxmWW1XaExBcFFnYkhlMlZpL3E2cENybExFU2VwNzM3Y05wS0NQUGJYMFdhTWtLVFhRUWdqTzlxSjNCZHA0Vkx1M0JVd2hDZi81elFzUEpOYnVMcXVJSXlWeG5INldyQ3RKOHpyd0MyMFY1aDJGS3lWeGttQ01HWFZuQ0VpczNmMHpMNTk2Z0NrbElYZnFjQWpqWDNXamQxWlZ4RmVLTUU1REdoWjhiN1BQZFYxQkNGakl2TUZoRkpjWTZMU04vNnJWZlNmRGtqRFNUUzJUaENFaXpzZTY4c3RaMzkwTFhQV1BNMWNET3pNL1VxejE2QWc2YStiRk1INkljdGRGcVUwWUllQzFNRzUwamJtM3JBSktDdUxzTzJ6RFVkZWxnMjZ6YUdUZkdaSXNSRitVakJtNld0OTdvdHRyTUlhSXNaTHdoZk90SS9uNUFYa29JVW15K0tDNUNzL2lka0IvVEJUckJLZUVCQXZ1RjE0L2Q0UnFTUkJsMW5wQXdxdTkrSERWelowaFNkakdKR1RQSGljYWxWZEp1VkRMVnpxOXc1UWI1YkdTSUFDeGt1aks2R2twQkVrV3Q5UFlCbU9ES3RTeVo5ZGFWMzd3V1k2VE95bHAzLzcveC9xT09zWWVLTHRvLzRDMGE4WjEvYjFnczZobGIzOWl6SkFmeVpvMVNlZ2srZ0NqcW1pc1lSNlUwSmc5WlRlV1FxQ3pLRFd2d3ErK1hlQklnU1BUSUdhd2F5MXIxNkw0UW1QMlVrNkFnUEpJaWNHQkdwcURINFZBU0FrMnZaSE5kSjY3elVrQWNFVVcvMmdzUW9pMGJYSTJJYkYyQjJPK001ZlpoQUcwcFNHRXdQVjl2SG85amYxM0hQeG1JN1BwbExweXR4dGs5aUphN0Zyd3NzbVR3R3kyVyt3QUFSTWt3V0FianVjVDl3S0NWbXZBYmxLdlUyL09BRlFhbysyRXZyUEdXb3RJOVFUV3JNV3lXbXRybExpdyt4amJ0eFRLYWVva0pyaDBhZWgza3lURVUwemcyeTRvZlExemtkM2pBdVJnUXZDWDYzcEoxT21NL0c2eGc3bkVWeVFOeXZVR014elJMU2FFaXBhUk1BajFGa0lrcGlSRTNGb0d1azlQbUZpeEhaQmtMU2FGU0YvUXdqUXNJVVNQTWJtVjhpUVU1MkFock80NDNxaDMxTnExcnRqbVpncmZHRWl5N21qYU13TDBjS3M0Z3RWc3R5eWxUNlVrV01DS0pMbFFtNTFMdTZZNUdHdnd2RFNhWXRySmR6Y3FySVVvYXdNbEpjWmFiRklrUVZ4a3pCU3FmdXVXempieHJEMWpqR0Z1N3o2OFJnUHBPQ2pYb3phM2c5cE1Pb1JJcDZSZWhxZTdUaEJtMDNuN0JBRFlnZ3IzcFZ5a2ZPcXRoV0dyWFR6SU5LVjRjeVdLa0VwUm01dEhTb2tGZEJ6VDYvVndsQ0xSbXA3VzEwVzA5ZVZBbUwyQkF4S3NoUUlKVFVlOVNmVWM2TEVrMkoyT092NUdsR0MwcG1pZ2RUYXpQdEdhcmpiYmxvUk9wbm9jUjZHTnhTYnh5REVMcm5PY01kbkVxdFNSQWN4ZE5mZWxxcHRyWTNDemhtOG5rK2NCMzZoWWpkTm5kNVZEWWcwMkhpWGhVTFAyRXNOWllZYlVrV1NVZ0FFSlA3cG43cWdZbWhlL0JtM3RJTlNqRlcvUFBwSzIwTTBrd2UxTFFvRUVBZkdQM3JydktLTWtETm85THdsREJBRDZEdC90TnFSOHNhd0NKaHNzdUk0aU1ZWld2UDJrNFZJY1kwa3pCR2lUMllLQzJtNG85ZUxCUnEzTGFJNmtBUkZsNDRROEdYcXZxNzVlVllsWUc5enN5OUpLVkNvd056U1d3L1NaUGRjaE5ocWJSU0htc2RkM24yTU1BVEE2VHNoTGdnSE0vUTMvVDZzcUVSdUQ3NmFmb0ZmQ2FGdDFWV05qV2MzVXNPKzZ4TnBnb3RFY1MvZk5OZjZVNGZ4NUk5bkNxaVJob0pLZVBMRHdnaVBFaGJLSzlGV1M1emdZWUdrYlNjTlNHR0ZKQ1RBMmRXb1dWWkVqeElXZnV2dTJGeGhOZGppeGR6U1VGYkV1UmJ6UFZYOVVWWmtvMGZoWnpORmlFRTZUb3U2Nmg3RndQbE5GTlMvTkZHTjdvMTdsdmI3N2gzVWxJOG96U2NJRW16Q1Vvdko3NWhwZnFxcFFiRXlXUzhnaE1vYmxiU0FOaTJGRVlneWU0NkNVSWtsaWJJa3ErdTVkODE5a05PbElwU1RrTVVMR3gvYnZQT3BMY2J5cVVxSFcxREpwT0IyRU43UnRpSTNsWEpDKzlUWGZvNWRvVERBcUJRMGxYL3prM2JkK2krcFVuZ05NNmgwTjFOS3NraTlYVml6ckpYbU9RMndNWjNwYmt3VHdXc1NiUVlpMnFTMUlwU0RCbGlROXZIZTI4UnVVcDk4WmNXbFBKUW1BY1lVWS9ib0RJQVJDQ0hxSnBwR0ZpeThHSVowYmNCUjlLZFlzaHhGQ0NCbzFuekRSbUtCTDBUSHFTWEhtRjQ3YytXVkdzd3VYZWxMTHVxaFFJaFd4dFkxaXBWemZ4MjgwOE9wMVZMMk95ckpvV2VDMVRzRDFzVkxNZElpTTVXUW5BS0RoZXlUV0VrZFJ1UlRNTko1YThKd2U0eVZoZ0xKdm4yWEcyYmhDck9ZUFVvNkRqaU5haStmQVdxUlMxSnROZHN6TnNYeXBSUmpIbk9vR0hNem0vMTdQc0JaT2RBS1NiRnprZXg2ZEtNWjIyaVBIK2xLZS9LWDc3dnB0aHRNN1Z3N1VvUG9iODRoS2FrcHhKbitBY2h5aWJrQy9UMnEwcHROcWNmN2NPWnFlaDVTU2xURG1kSEQ5MjRlVDNSNmRPTUZSaXBsNmpTQkpNTDFnNUxzQndEc1g1bjZoUkFyeXFtZ0VaZXFvMURqZjRybEg4d2NhWTFBbDBkaFJITk5lYlExbTdad05RcGJDNjdmYmVqb0lCM1pndGxFbjFKb2tpakhkN3NpeE8xM25qejkzMzUzL20zSTFWSmxKZUpJa0RDN3dML2ZPL1psTUUrNEJvSk1FdnpsRFdhckdYaFFSUnhHTkxHejhWQ2Znd25WSXhKa2c1R3dteVhPTkJvbTFSSW5HdEVmVmtCUmk5YU4zSGZoWnhtZVpMOFc0YUl2K2lSclE5emY4OWc1SC9kL0JRVmtpMlBwc2VlTGZUcThIV2c5aVZVOTJBczcyUmgxYzF5S3NoVk9kSG1jeUFoYm01M0hyTmJSeXNOM09TRWdMd0VNN1pqL3ozcHQybmFZNnMvelU2bWhRRDBiSENzbDN6dFNlemgrVVJCRzF1VG5jZXJueDdmWkNITXdnSzhycGJvK1RuZDQxUFpqVHhuS2kzV1VwVEYrWStVYURzTk5oNmR3NW9sWUx2em1EVXh0TkdmR3Jiei8wK3d4TFFkRlZVWWxwU0JnczZ2Q1oyM1kvTTZQa0M0T0RyQ1VLQXBvTHUzQnJvMFJvazg1NlYxWXozMHhqV1MrRUVkOXV0UWM1U2E4bGRCTE5zZFVPRitNRUpTWHpOWjlldDAycnZZcU9ZOEtnUzN1MWhkdG9EcWxoS1VTWFVSVTBkYUxhc2NGZkRFdENETVNQN21oK1Z1UVNkQnV0aWNPUW1WMjdVaHRSZ0RhRzFXNUFHQVRzV2RpSjZ5Z0NiVGgycWMzaU5hS2VySVd6UWNSTHJRNmhObml1eTg3WkdicmRMdDNDNkY5clRSU0ZPUDdhbkcwdjdUbU9XL1psTE5ZbENVRDhrd2NXdm5HYjcvN1gvTUVtU1lpQ0FIOW1odWF1WGNpU0dlNmRia0JrWVVlemlaOWxjWCtqMitOWXF6UDRUbnMxY0NuV0hHMjFPUjMwc0tSZTBSMnpNM1RDY0pBcW9naWRhS1N6TnBWdjFsRkhHYi9jeTRiVUVaUVRFUUhoRnc3ZDlFdHpTajZiUDlnWVF4eUdTT1V3dCs4bTZ2UHpxTnhjTnNmek1GTFNqbU1hdFJxempUcU9VblFUemN1ckhWNVo3ZEsrZ21SY2pCS090VHE4dXBxKy9hN2pNTjlzVVBkcmRCSTkxbTRKS1liVzlUbFlyMzJWVVRVMDlWSXY0M0psRnllVzU1T1UxNTVaRGZaOC9PVFNyNVd0aHlPRVFMa3V5bkd3TmcwZVZxNUwzT3NObGxoeHMyVGxRWmFxclIvVDJuQVVPejJYQmMvZDhtbTVrYkVzUnpITFlUU3dTWTVTK0s2VEppMVBkSnEwUE96aGVUVmFyWXVEeVRCNXpNN05FNisyTU9rOHRZdFBmOGM5MzN2UFRIMlp0U1RtWlF0Y1ZHSVNDZjJTejQvZFQ4SmFlMlkxMlAySlUwdWZiMnZ6SFpVWEVRS0VLRjBScXArMjM1TnB3cXA4NW5nQnpMb09zNjdEbk90UWszTGQyZU90aFVCclZoTk5LMDRHbnlNaHl4anZ1TlI5anpCSjAvY2JuV0E3SFd5UzREYWFDTmVsMjJrUFZxa1NRdEJvTkJGRzA0OVdQenhULy9uZmZ2RGVYeVVsSUorOHZKaTR2QktUc3NhUEpCeGhlT0VLLzQwb21mbmc4WE9mT2hNbC81U0tVUDJKbGVpVG9SUnhITlBMTW12bElVbnpLdFdVeEpjU0tVVTZPenRqeHRoczZSWnJDWTJscDNYcTZ5L2NLL1g5dUxqS1dWczd3UmhNRUdBTGN5N2NlZ09uWGtkckRkYWlISWVrMXlQdXBnUTBsRHo2Tzk5NTVCL2ZYUE5XcWM0ZVAxRWxUVU5DZjF0RmhBZDRIenQ1L3BFL1dRMCt0WkZGaS9Kd1pVcUdGSUk0aVlrU1RhTDFRRUxXQzBjcFhFZmhLZ2ZQVFVOVFFwMmw1emNtOVFHRklaWGZaYk1wWW9MVVM5QS96aEZpNmNNSDkvK1RmM0hidmhPc3JiVlR0YURGV0V5emZrS2ZpUDRVMEtHTVlMbmlYVWgwN1JNbmw5Nzk3VjcwV0Z1YnR6RTVBL0ZZdVAwRmpiSzFkYlF4SlAwMWRhekZZZ2R0bDJxOTlOdEd1aEJTV2t6L1BHTUg2eUxZT01hR3ZkSVFsV25nUy9uR0Q5K3k1ME1mdWZQQVVZWlhuU3J6bWs3RWVsY1N5ZHNJU2NWcVVvRHo1WlgydnE5YzdIN1h1VGk1dTYzTlRSY1Q4MEJrN1MzVFArcG9CYVFVV2FZeGtWVkVERjZSbEl5VUZFTzZzcFN4ZG0zUUU4ZHBpY0tocVV6cnJJUGU0N3RmL1BlSGIvdk1JN3ZtTHpDNmtraVoyM3J5ZGRlNXBnNnNTVVF4WTJUWittcERTMzg5ZVdycGtUOXVkWitvU3V1NWxiQkpBa21DVGRMR256WU1SQW5SY29SWWlhM2RhYXlkazBLMDZsS2UydVU1ejc1bjM4SnZmZWlPbTQrenBuYjZqZDlYUVJ0YWQyMnJGcnZMMjR2OC9nZ3hLM0hpZitTbE4zN3d4U0I2UEVMY2pKUUlLZElwdWV2cC9sZ0x4bUJ0cXR2Ukp2WHY2NlRVeno4Sm5oUm4zanJiL0xWZmZPdkIzOTNsdVNHajYzRVcxK1FzODVSZTFvV05oczdKYmZOa2xKRlNSb2dET0l0aFhQdmtpNis5NTY5WE80OTF0VmxMY3BoMWFjczdXalp0L0MwTWJtb29lZlN0czgzZi9NeTlkM3hsaisvMkdGMG0yREJLU0hGZ1Z2eCt2TDQzZTZPcjBGSk9SaFVobFdRQTd1ZGZPM1AzL3p5My9QNnpZZlJvWk1wWG9kMUtlRktjdmNuM2Z2L1J2VHUvOUdNSDk3OUV1ZCtucXBUOWY4TUV3Q1pJNksvSFhGZ0F1Nyt0SXFTNE1PcVFxZ3EwOFQ3N3l1dC82eTh1ZFI1WkRPT0h1bG9mc1Z1d2VycUFwS0hVMGIyKys5dzc1cHRmL2NTaFc3K1JSY2IxR3ordlVvb0xaVmR0UzhQY04xUy95N2dvZG45YlpUK3FiTWVndk5RTzZyLzU1dmtqcjNTQ3R5ekh5WjJkUkI4SWpkbWJXTHN6c1RTTXRUUFpkWXdVb3UwSXVvNFFLNzZVaTAxSHZibmdPc2NQTmV2ZmZ1ekFucU9IWityOWxjbkhsWHpqbHIzaFpXLzhwZ2lBemFtamlkY3UyVmJaamp3cFpWdFpPTDhzUlVHK01jcmUydUtiWHFiN2l3VGtyMWU4Ui9HK0c4YmxUTm1WcjdCZzdXRUU2VVAyRzFRemFqL0tTbGs2b0xKN1ZnVXJqQ3RWYjM3K09ZclB0V1c0VW5uVGltK09ZSmlRb3BUa3BhVTBGMU4yclhHU1VFVkdtWTZmcHZFdkc2NTA4cm95TW1DWWpHa0tWRXRDZjd1ZVVqejNpdUpxWlJBc1UxWGplbGtVOW1FOENmMzlNbEtLOXkrZWQ4VnhSVWw0K01HbjZzQWU0R1pnZDdhL0w5dmZJWVNZQithQU90QVVRc3dBcmhCQ1piL25jNC91TEZ4K3BiK1RmWWhaQlJKcmJReTByYlVkVXA5L0M3aGtyYjBJTEFIbmdQUFovaG5nL0RQUFB4NXM3Wk9QeDViMmpoNSs4Q2tCSEFUdUFlNEU3aWhzNTlkZHdTMUlhbFgyZFd3Q0xnSEhnZGNLMjJQQWlXZWVmM3hMSldkVEpEejg0Rk83Z0w4SFBBUjhGM0EvTUJweWNXT2hEWHdMK0Ryd05lQVBubm4rOGVYTlhIRGRKRHo4NEZOM0FvOEI3eVp0K08yWlQyRU5tcFNRM3dPZWZ1YjV4eXRuTkZWaGFoSWVmdkNwdmNBdkFoOWdreDlyYm1BWTRHbmd4NTk1L3ZIRmFVOFNrL1RsMng5NHFyLzdUZUJ0RzYzZE5zTzNnTGQ5ODRYS3hiaUdzSjQzK3NhYi8zVDVzSzdleEhwSWVCVDQ3MHdSd3JHTllVamI2UHZXYzlKNlNGZ2t0UWVIZ1U4RHovSTMwZ0ZwR3p4TDJpYUhTZHRvYW5zQUd4dXN2UXI4cDZ6c0FkNEYvRzNXdXFqTjZsTnZDSFFZN3FMK0VlbGdiOFBZN0lqNVBHbHZvRDl2b1RoWU81aVYvbjc1akpKckR5M2dCT2tBN1VSdS8xaTJ2NldEdGExMlcxalN5bGIxbFJ2QVhsSlh4WjZzM0FUc0FuYVFralJQNnJab1pIOHJvSmI5bHEvM0xNTllaVGhEYUQ4c1VaTTJhZ0IwU1VmRExlQWljQUU0Uy9veW5TZDFZU3hteDEweC9IK3NNaWR3Y1FxVWlRQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvaGVhZF85OS5wbmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE0MmZkODhiMjcxYzM2NzNkNDlmYjg3MzdiNjVmOWQwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE0OTg1YTI4OGZjOGFhYTcwN2I5YWMzNmE1ZDBhYzQ5LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIyOGQ4YmYyMjFkYzhlMzNiOGQ5YTViNjg5NzNiMDg0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfMy5wbmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjljZmMwNzc0MDQ1YmNmNTY2ZTFkYWVmNGFlZDllODdkLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfNC5wbmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhYmExNTZkZDc5Njg0M2Q5MWE2MGZjZDUzY2VhYjQzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfNS5wbmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRiM2JmODkwMjY0MjM0NmVmZDFlMzUzNjExN2M2YTBkLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfNi5wbmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1NGYxZjBmODY3YTVhMGIzYWVkOWFhMjhjMDdiMzA1LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfNy5wbmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZjMWFlMmJhYWMwNjNmZjYxZmI1ZjM0ZmNmMWMxYTgwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfOC5wbmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwZmNlZDRkM2YyY2JmY2IzZmFiNzliZDMzZmM1NmUwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfOS5wbmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwMmJmOThhZDNjY2E3ZWFlMDAzNTdhMTcyNzIxMGM4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZVJlZFJvY2tfMTAucG5nXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGWUFBQUJWQ0FZQUFBRFR3aE5aQUFBUzYwbEVRVlI0bk1XZGVZd2xSMzNIUDlYZDc1bzM5K3pNN096cDlRVTJ2c0VHSjhRMnhCdmJFc0d4dzZFWUZIS1FRSUlBT1g4UmtEaENqS0w4UVJCSmhBVUpDa1FRSW1OamlCSGhTcFREeExEbVdHdHRkdkVlOWw3ZW5YTm4zcnl6ajhvZi9YcTJYNzJxUHVaSWZsS3JxMzVkWGZYN2ZmdmJ2NnJxcm41UGZQU2pIK1gvVXo3eTRidkVWdFg5c1QvN3R0eUtlai95NGJ0U3l6aGIwYkJpeEpZQnQ1RzJ0d3IwU0RZZDJFMEFjcjNuNXdKS3RYT3pnZDQwWUhNQ3VoVXNUcW96RmJTNC9ac0I4b2FCelFob1VwbXRDaFZ4Y0hSdEdNR0xmTm9Jd09zR05nT2dwdU41OWFaakpxY2p2WHFPV2w0WTlHdnlrUS9mSmRZTGJtNWcxd21vcWt2THArbWpZenFuZFlCSlRWMjZDOUJYMzNyWmErVXBuQUtxb05kSW9laUVZYk55NnRVeVdjdVo3RXZ5SWF2dmZaSVoySVNLMHd4T2MzcTlZT1c1Q0JqSzZ1eEZrMC9Eb0U4eWhZSVVVRTNHNkFCVzAwbm5tM1NxcUxkMFBLOUxtOEtDN3Z4NEhsakRJalVzcEFKckFEWHBDcXVnbWZacE9sMDdPcEhLM2dTbzdqeGRmRlhQMGRXUkNtNGlzRGxCM2NnK2pmazZTV0tXSkFPclltVlZnSlBZVDRKdVRZekFiZ0tvYWJvc2pOYmxJMUdkVW0vMWVGN1ZwVWxXOWh2cjNNZ0VJU3RJYWpvcndHcGFKeXBMMVgwYzBDU0E0dVd5eHVwRTBRS2JnYTE1bVdrQ05DdkFhbDRIakFsWUZkdzBZUEtDcXdVN0syT3pnR29DemRMb2s4cm85aWJSZ1JudDFTMnFUNmVQemhHR2RQeGNuZlFkNndOV3c5YjFncnFlVFcxRFp3UDBBNkx1azdhc29nTTNicy82UndXYXlxTDlla0ROTStpUHQ2ZW13UXlzQ3FBRUFzMHhHVHVtMXF1R0hKWEZtZUp0RDdBcGJGVWxEVlFka0twT1YwYXRXMmRIRm1EajhUVU9iaHhNUzZQUEE2Nkt4NW8rYjR4VkFWQjFhUUJhaGpJVzVqWk1GMWNGTko2T2cyVXFwN0xWb2hmY2VOdVpZMnNrU2NEcTJKc0dxQWt3M1Q2SnZXajJPakdCR2dFYXNUWE9XakFEYkNsNUZlQklsOHJhTldBelBnK0k4bGxCTlFHYXh1QzFkbXArMFhtaE9UcTI2aGNIZkNuc0FkdHQ3QzB2WDVnb05GdVltUm9CRkFjMTJ0UGRXOHJlNUc5VWYveFlhaWRvWW13U21McXlPb0NUd0ZSMWE4QSt0Ynh6OS9QTjhkdFhnOUxOcnJTdURMQjJBWFpQaXl0SVc4aHpEdjZ4aXVVZTJGVmNlZkxPOFJQUDBjdllxRjRWMUVnaWNGUncwKzZRdU45RzlxYkYyS3hBSnNYUnBFMEFWczB2RnArWXYvSU5DMTdsTGI2d3J3T0VFT0FVd1hiQXNrRjBSN295QUJrZ1BFL011QjFueHBYT2E1OXRWUjQ4ZkhieVJOWHVmS2RZYUQvM3R2R2ZmeWZtdE9tMmpRQ04wbXJveVIxWDQ1S2w4OHJhWWVrWXE5dnNLTzFMWVQ4eWQvVWI1cnpCOTBzaFppd0hLbVVvRFVDeDJEOXJpRXRFUzgrRGRoTmFEV3RmelMrL3kyK1crZVM1VzQ2K2R1alV1MjZwdm5TV1hyYXFWVVdBNmdCV1EwUzg2VlJ3ODNSZWtTN0xpRUIzMjl2eC9JOVdkdXg1ZW5YblgzakN2dEV1UUdVUUJnYkNnNzRIeTR1d3NncU5GclE3SVlBQXRnM0ZRbmdCaHFvd01nekRRekE0Qk8wMjFGZkFjNjNMbjF6ZSs5MURqY20vL0wzSlo3NW84Q1V1OGRDaEN3dHA3STBETFFEcFFGL0hwWXV2YWw2OTVaTTZMeFZVKzlHNXErNDg0dzUvUWxoaWNHQXdCTVVHYWpXWVhZRG1hcDNMaG4vQlZZUEhtZHAybnVIaUVnTk9FNUMwL1JJMWQ0VDUxaVNuNnBkdzdQakxjSjBKcGlkZ2ZCeEtrOUJzUW4wRnErWU9mT0RUNTI1KzNidW5mL0xPb3ZDekFLVU8vdVA3cFBKOWtqWEdxdUZBcDg4U0N1d3ZuYi8yYmZOKzlVK2RBdGJRR0pRTHNMb0tzL05RNnB6aTlxbi80c3E5aDdGQ0lQcWtaTGNwMmJOc0s4L3k4dEZuMmIvem01eXA3K0ZIYzcvTWdaT3ZZTjl1d2JZSktKYWh0Z2lkdHYzcXZ6bjN5bSs5YWVMdy9YdUtLeXNHTUNMd0lyYnFmTTB6SFY3WFkwTVZ4RWhuN0p5Nm0vM2wyV3NmbVBlckh5b1VZWFFTQ3NEWmwyQjVjWVU3ZDM2VHEwWVA5VFJrTVVhUjY3R1pRdEttelEvd21lc3phR2YxSlBkVlQzSyt1WU52blhvakoxdTcyVGtOWXhOd1lRbG9XcnNlbWIvcWlmc21Eci94MHRMeWhlNXA4YUdhaVNBNjFtWjZibUI2bVpnM3Zwb21CV3ZibzNOWDNUbm5WVDlZS01MWUpCU0JVNmVoMGp6TU8xLzIxMzJnbHZrVlJuaVFDdnNwY2oxRnJqT1lkVkdtSzJmNTdTcyt5K1gydi9QalE1SkdIVWJIb0ZTQmdoQlRYMXQ2K2RmT3V0VUI5QmMreXd0SjFXOGpabWx2YVpNcTFwWFJob1NubG5mdU9kMFpmc2h4c0NLbXZuZ2FkdkFVYjlyM0pTcE9vNmZSRXI5RWhidUpocThlTDFMallYeG1VOHdGU3dUY052MWQ3dHYrRlk0YzlXblVZV1FNQ2tWd0FqSHo1WVZYZkxFWk9BWDZ3VTBDVkFja0JsMW9SMExCTk5hYWdPeGhnUytGL2VQNmpvOExTd3dOamNkQi9TRjM3WG9DSWZwSE5BWDJBZUF6UjUydlV1TnoyaEJnRkNHNHJ2dzA5MDU4aGVlZWwrREI4RVE0b3JBRDY1clBMbHozSWRJQk5aRXFrMlJlVjZCcHdIUlZlN1pINXE3K2RRLzdsbkkxN0toZU9nZWwxZ251MnZrRXB2Nmd6dU9zOENsVytCUWRmbW9zbHlUU3NyaTIraE51Ry9rZVo4NUJRVUIxR0d3QkxiZjRXLyt3Y1BXdmtReXU2bnNhZTNza0s3QkpsUnF2ZE4wdk9MTnU5VDJXQllNajBHckI3RnlMZS9mK3M0YXBEa1Z1cE1KZFFDY2ZRelVpN2RETU8wYS9nMU43Z2ZtRmNKenNGS0FrNFhSbjZLRWYxNmNtRlp1emdLejZqYWFNeUJwalRmckVFY0svekY5NVQ0QzF1eklZUnN1NUJiaDkrL2NZTE5TVTZteUdlQWRWM2tTWjJ4QU1wNWlWUVVTMEMzakQrS084Y0VvaUNGa3JCQlNrR1A3K3l1NEhEZmJIOTZxL21VUUhyUEVxR0hScXcydTZCVy9nZmlIQ1daWG5RdjNDTWpkdU85RFhZSVg5T0Z3S1FFQ05nTVdzOXB0RlhEUjF1bmlXcXdjT3NyUUVwVklZYXdzU0dySncvK09MbDE2bHMxM3hxNmZtbER3QTFqcFdZSnVNNkRuMjNPcTI4WTYwWDEwc2gzRnRiaDV1Mm5ZQVczZzlsVG5zb2N4cjEvSWV6N09lbUtxS1ZMeTZaZmkvT1Q4ZkdsZXVob3dxZ0hXNE5mNkhHSWl4a2ZhemptT1Q0a3kwNzlrT3JrN2ZLZ1JXcVJJcTVwZmdtckdmOVZWUTRaNmU2bDJPWnJjK2grd3B2WURkWHFUVGdXSWxKTFF0b1NXZGU1NnN6VXdyUGlWMXlKQUI5RHlqZ2x4UzgwczNDQkdPSDl0dEdCVHpqQlNYZXNvNDdNRmhUNC9PNDlpbXRDLzZTQys1ckhLRWxSb1VIS0FMckFUN3dPclUzV3hnYUtVN0p5K3d1b1oxQm9rTzltVUFqZ1AxT3N4VVQvVlZWdVNtbnJ6UFBBR3JPVTB5U05BZlRuWVZUMUt2aHdZNkRsZ3laRzdOTCs0MzFMTHVjSkFGMkN3QnZVL3ZTN0hiNmo3M2I3VmhvalRmZDBLQnkzcnlIaWN5bUpOTmhBYllpY0lzclhhWXRoMndSR2l3SyszcjYzNGhlbTZTdGZkUExMUFJVR0NzWEVwUnRleXdnT2REeGU2ZHRncEtXSXozNkR4ZTNLQTVzZnI5L2hsZHhXcmdkUithclEwYXduQlErZjZGWGZ2WVlJY1ZseTJMc1JJS2tmRkJBQVhMVlJvZTZqdG5zeGdyZktrZFdCU0VpeDkwS2FsNFB1ZVdaemFsOGE1c0diQUNtaklJL2JNdDZBU2x4S1lETGhCd2djMFE0ZXFmNWJabEdjZnF2dFpSQ04wS25FMllsVnlValFKckhIQmFRcTRHWGY4S0JhaTV2WFpMZWtQRFpzWlhxNk43VlFVMWI1aENvZHQrdDBnMDN2VVFnMnpHQURxeUlVTVozU0lIMDFQNE5iMU5jQ0xvTXJaY2h2bldaRS9oZ0ZVazliVzh5NUVjWnB0RmVJRTJ2Z0xNZTFPVXkySGE5MkxMWGlUWXlHZzRvaTRDTVVuaVJjakwyS1ExVTNHOUxGbitVU25CZGNPWGZxZnJseUNWdnFITzE1QTA4WGlCRHMvbU5FVXZWc3N6SG51eGRSbkRneUdndmdlQkNFRUZxRnB1LzdCbEkzWnNabVhFQUI1MW1rOER1SzN1MEtZMHdObjZycDdDTGovbkFwK2d4dCtoZjlPY1Q0UWJZTG42ZWp4WjRIanJDb1lHb2RNT0FZMHVnWlR3OG9HbEkyUWpUcEtzbGJNTVg5eXB1clMzbW4xcnFHNGJQWFZBU29KMk0xUk1qc1BCeFZkcXFvZ3ZxZHFBU0xBYnJ2SHc0Y1kxREkyVXNleHdIUUtBMTJXc2hUeC82L0Q1QllNdnBPaTFzaDdHeHRkSXFmbTFiYXBZYjBvck9PMjU0UG93UGdhSGxtNWcxZTBmWm0yR09QV09kbElRaXVCL1ZtNW5jbHQ0R1R0TjhBazNLV0hBOHI2aCtBSWJ2Tm82WUJOanA2YXNyb3dFWk5YdWZGMUthTmJDY2VQTVZJSC9QUGVyRzdGWEszYkRSUmhDQU1DaCtnMTBxcnNackVLakhnNjFPbEY4bGZpdkdwejlnbXE3eHArNGp5VGtnWHlqQWxXbkd0QzNjdnEraVNOLzcwSFFha0RIaDVudDhMT0ZWM0Z5ZFYrR1pyT0pYWGV4MnZweEswRERIK1JmbCs1bGFsdkkwT1lxK1BJaXNCWEwvZXIrc1ZObk5QNmtrVWc5MWlOWlEwSFdCbnZEZ2ROc0NkdDdNZ2lnZmlGRS92SkxCSSsvK0ZicUd3MEpnY1NwZGJBNlpsQWxGbzh0UE1EWTVCRFZhcmo4eVBlZ2JYVW5DSkxWMXcyZithUnF0ODRYZzg5R29QUEVXT010cjltaXRhbkJGZVhGVDdWRjJCUFg2ekEyQ21NVFEvelRzZCtsN1pkek5IOVJySTVQWWFXRDhKSkdFb0t2TDd5RmV2Vmw3TmdPTFJjYXErQks2QkN5ZGNScWZlYlc0WE96Skgrbm9QcWZLZmFxd0NiRmtraVgyR21wMnh0SGp4K3lIZS83bmd3WjAzTERrRkFZbWVZZmovNUIzNHdzU1lRWDROUTYySFdYdFFHb1JueHA4OWo4QTV3djM4emVYU0dZdFVYd0EyaDIyV3JMNEpsM1RqLzNPWHJKWUFJMGQ0ZVd4dGdzRGFtR3hmY0JJRzhkT1BQblRVSE44MkZsQVZvZTdKeUI4dWgyUHYrTFArWkU3WXBrSXpzK1RxMkRVMHRqS1N4NUUzeiszSHVaSDdpSnZidENkaTdOaGFzVm0xWVlYMlZBN2ViQjgzOHk0blJja3RtYUJxcVJpUFlkZDl6QkhiZGZudlFBMi9Sa1hWZE9XOGVlNHVycXNmYnc2VVZLZHpzQnVHMndpekE2QXNWU2lmODRmajFMN1FsMlZNOVFzc1BSdStVR1dDMGZwK0ZoZGZ5RW9WUW9yaXp5NU1ycmVYVCs3WXhPajdGakJqb0JYSmdMWDJRMnJSRGtJTURmVTF4NTMxdTNIWDJhZmpLa2dab1VkM3NrRDdEYU53V0dzcWhsYnh5WU8vYlQrcVJURjg3TnRoL095Q1F3T0F5N3R3dm0yOXY1dHhPdlliayt3bUI3bFZHNWdHV1k4OGRsM3AzaXFkcnRQRGIvQVBXaHE3bjBFcHVoNFhCZDdjcGkyRmsxTFdoTDhIM1laamMvOWtmYkR6Mk9jbGZGdGl6eE5pNWF2WWgrS1M3MnRqYUprZEdtcm5sS1d4SWZyWSsxLytyOFRSK3N5K0k3QmdKd3V1L0VCa2VoNUlRbUxpekIvQ0o0alRwN3lpZVlLcnpFUkdHT2d1aGdpUUEzS0xMc2p6SG5Ubkd5ZFNrdFo0SnRZekE1RVU2ZDNRQldsOFBabFMraFlZRVhnaHBzczVzZmY5L013UzhTanJ3aVVPUHBPTkE2TnNjL1Ywb0tGVkszakZOMndZcjJPdEhkSXBrbSt3OU8vK1NodjUyOS92UUNsUStVSkxac3c5SnN1SjUxWUNoY1BEd3hEcjVYcFZhL2h1UE5hM2l1QTRFZk5tSlpVQ3BBWlFqMkRJWkw2aVhoN0c1MUdWcU43Z1FBYUZsaGh5VURtanVjMVErK2UvdWhiMmhBemRRSks3Nm1ob0k4NjJQVmlnUm1nQVhtOWZ1OForcmdGeDVadk9MWkkrMnhoMXpMMmxjS1FEYWgwK291aGE5QXNSUXVTeG9lNmIrNlVTT2VDeXUxOER5dk8xQndDY2Vwbmd3dmhpV0RZemRVNXQvN0d4UEhEMk5tcGk0a3BJS244WDh0blFYWTZDU2RmNUZlYlVEMy9WVFB1VzhlZi83QWVYZmczcThzWHZrN3k2TDAreTNFU0ZGQ3dRTjNCUm9pZkM4bFJQalZqQlY5TlNQRHVDbmx4UkZYQUxnQzNDNmczUzlyV3NOVys3TnZuenJ5OEhTaDBhUWZ4RFJBczdEWEtDWmdUZUZBVjZINldVOGMwS1F2VCtSMG9kRjQvL1RQUHZPTDF1aVh2NzI4OTgzTFFlbXRMYXhMYk5FTnlrRzRpa2I0RjQySUI3dEFoRStvb29jcE1vU29PV0M1ajcxNjZOekRkNHljT1VzL2dINnNDdE5RTVRlUXFvajR6NXdhUHZKSTYvbmpuWmd1YmVybytqcEJUMXJXMTVjdXZlYUY5dEQrbGl5OHhzTzZWblpYSDBjdkp1UHpnclcwcEY0VS9nOUhyUGIzWGo5eStsdFhEeXl1YU1ESzJqbmxpYlh4UGZGODFsQVFKMHdrSmlhckRJNlhqZGRqeGVvT0FNc1JRZkNiNDBjUEFnY0JjYTR6VVByQjZzd1ZjMjVsWHpOd2RyalNHcGJoVWxlM0tJTEZrdVdkbXlrMmp1NGZQZm44Z09WNWl2TkpqTXc3ek1ySzJMVnlTY0Rxd29BT1lKM0VQMHpUZmZVWGhaazR1NlZ5WEd3dk5ocjNqeDk3Qm5nbXdRbGRiMjBDeTNUTFozMVdrTWJXTmNrNktvakhYTmdZd0hGQW8zcFRKeGdhZTlSMGxsczQ3MjJ2MXB2RlowQjVWcUI1VGFPckpLbmhKSWVTTmo5aDB4MFBFbzRuMVo5MUpKRGt2K2xZVHo1UGpOV0ZCdWhsc25wT1BJN0d0elNtSnJGVjU0aDZrYU8wYWFhVWxhVzZkQ2JwZTdxVjhuT2V1Z2J5eExpOERFNWlzem9sVlhWK3hyYnlBS3o2Yk1ybmpySHh0RnFaVHFlZWIySXRtSm1hbDdIUlBpbEdaZ0V3SzZoYTBUNlB6ZkJLM0dTRXpsaTF3OUJOSjVPWWxaV3hTZE5WdGYwa2htTFFxZWtrbmZsQjl6ckJqUnVWdEdVQmRDdTI5Y1RhZGNsNlBsSk9Dd3Vta0JBdnF4dTN4dmRxT290TjhYVFdNSkZGYjhxYmRFREtxNW1FanN4a1FGbzgwekZYM2VmZFRNOVRUZlVuMlpia1V4SUdmWkw2bGpZSHVGbmlyUzd1bXVKZjN0dmJCR3JlV3o4dHBpYnAxeVRUNis4VWNMTUNuTVphRTBCNTRyV3V6bmhhWjVmT0R6VDVOQ3g2SlBPNmdvemoyM2crRDhCSkREWUJaN29BcWc3RE1kVk9uZTE1TU9pUlhKMVhWTEhoYThhb1VkTlRyNlJ4YmhiSmVtNFc1dVdLbWV2NWs0bDFyWS9Od040a0ppVEYzYnh4TWN2NXVyWjBkcTNIVjZPcys2ZWtVOWdiaWNwWW5WNDl2aEZXWnprL1UvMGIvU09mRGYrSlQwYUFJUmxNMC9ITmtGejFidGJmVDIzYTMwN0ZEY3J4UlhrV0o3SThLOWlRYk1XZnBtM0pQOURwRE4zQUg2aHRxdE5iL2M5emtXejVYL3RGa3NXaGpmNTczZjhWYUZua2Z3RVRka043UGZVdHVnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVZZWxsb3dfMC5wbmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=