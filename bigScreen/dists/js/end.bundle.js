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
/******/ 	var hotCurrentHash = "85550d153d70052d8526"; // eslint-disable-line no-unused-vars
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
/******/ 			var chunkId = 3;
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
/******/ 	__webpack_require__.p = "http://wx.yyeke.com/171215game/dists/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(40)(__webpack_require__.s = 40);
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
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HKHB';\n    src: url(" + __webpack_require__(2) + ");\n    font-style: normal;\n    font-weight: normal;\n}\n\nhtml {}\n\nbody {}\n\n.wrapper {\n    min-width: 1430px;\n    max-width: 2000px;\n    background: #151886;\n    margin: 0 auto;\n}\n\n.wrapper_0 {\n    min-width: 1430px;\n    max-width: 2000px;\n    background: url(" + __webpack_require__(42) + ") no-repeat;\n    background-size: 100%;\n}\n\n.mainWrapper {\n    position: relative;\n    min-width: 1430px;\n    max-width: 2000px;\n    background: url(" + __webpack_require__(43) + ") no-repeat;\n    background-size: 120%;\n    background-position: 50% 100%;\n}\n\n\n/*@media screen and (min-width:1400px) and (max-width:1600px) {\n    .mainWrapper {\n        background-size: 120%;\n        background-position: 50% 100%;\n    }\n}\n\n@media screen and (min-width:1700px) and (max-width:1900px) {\n    .mainWrapper {\n        background-size: 120%;\n        background-position: 50% 100%;\n    }\n}\n\n@media screen and (min-width:1900px) and (max-width:2400px) {\n    .mainWrapper {\n        background-size: 120%;\n        background-position: 50% 100%;\n    }\n}*/\n\nimg.title {\n    position: fixed;\n    width: 65%;\n    left: 100%;\n    top: 4%;\n}\n\nimg.movingTitle {\n    position: fixed;\n    width: 65%;\n    left: 15%;\n    top: 4%;\n    transition: left 2s;\n}\n\nimg.music {\n    margin-top: 3%;\n    margin-left: 85%;\n}\n\n.luckyStar {\n    position: relative;\n    width: 39%;\n    margin: 0 auto;\n    margin-top: 4%;\n}\n\nimg.lucky {\n    width: 100%;\n}\n\nimg.luckyUser {\n    position: absolute;\n    width: 12%;\n    top: 49%;\n    left: 44.5%;\n    border-radius: 50%;\n}\n\n.luckyStar p {\n    display: block;\n    margin: 0 auto;\n    margin-top: -3%;\n    font-family: HKHB;\n    font-size: 1.2vw;\n    color: #f47080;\n    text-align: center;\n}\n\n.otherLucky {\n    width: 62%;\n    margin: 0 auto;\n    margin-top: 2%;\n}\n\n.littleTitle {\n    margin-left: 3%;\n}\n\n.userHead {\n    position: relative;\n    display: inline-block;\n    width: 8%;\n    margin-left: 6.2%;\n}\n\n.luck{\n\tcursor: pointer;\n}\n\n.otherLucky .first {\n    margin-left: 3.5%;\n}\n\n\n.userHead .background {\n    width: 100%;\n}\n\n.userHead .user {\n    position: absolute;\n    width: 85%;\n    margin: 0 auto;\n    border-radius: 50%;\n    top: 5%;\n    left: 8%;\n}\n\n.userHead p {\n    float: left;\n    height: 50px;\n    word-break: break-all;\n    display: block;\n    margin: 0 auto;\n    margin-top: 8%;\n    font-family: HKHB;\n    font-size: 1vw;\n    color: #f47080;\n    text-align: center;\n}\n\n.btn {\n    position: relative;\n    width: 10%;\n    margin: 2% auto;\n}\n\n.btn .blue {\n    width: 100%;\n    z-index: 20;\n}\n\n.btn .yellow {\n    position: absolute;\n    width: 84%;\n    z-index: 5000;\n    top: 13%;\n    left: 7%;\n    cursor: pointer;\n}\n\n.btn .pressYellow {\n    position: absolute;\n    width: 80%;\n    z-index: 5000;\n    top: 15%;\n    left: 8%;\n    cursor: pointer;\n}\n\nimg.astronaut {\n    position: absolute;\n    width: 5%;\n    top: 56%;\n    left: 70%;\n}\n\nimg.UFO {\n    position: absolute;\n    width: 8%;\n    top: 42%;\n    left: 10%;\n    transition: all 2s;\n}\n\n.blueMeteor {\n    position: absolute;\n    width: 4%;\n    top: 33%;\n    left: 25%;\n}\n\n.purpleMeteor {\n    position: absolute;\n    width: 6%;\n    top: 30%;\n    left: 80%;\n}\n\n.npc {\n    opacity: 0;\n}\n\n.details {\n\tdisplay: none;\n    width: 60vw;\n    height: 33.2vw;\n    position: absolute;\n    top: 16%;\n    left: 20%;\n    background: url(" + __webpack_require__(44) + ");\n    background-size: 100% 100%;\n    z-index: 999999999999999;\n}\n\n.details_userHead {\n    width: 8.8vw;\n    height: 8.8vw;\n    background: pink;\n    border-radius: 50%;\n    margin: 0 auto;\n    margin-top: 6.8vw;\n}\n\n.details_userHead img {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n}\n\n#nickname {\n    font-family: HKHB;\n    font-size: 3vw;\n    color: #57e5ff;\n    text-align: center;\n    margin-top: 3.5vw;\n    text-shadow: 0 0 7vw #57e5ff;\n}\n\n#names {\n    font-family: HKHB;\n    font-size: 1.8vw;\n    color: #57e5ff;\n    text-align: center;\n    margin-top: 2.5vw;\n    text-shadow: 0 0 5vw #57e5ff;\n}\n\n#studentNum {\n    display: inline-block;\n    margin-left: 2.4vw;\n}\n\n.baterry {\n\tdisplay: none;\n    position: absolute;\n    top: 36%;\n    left: 74%;\n    width: 2.4vw;\n    height: 18.3vw;\n    border: solid 4px #57e5ff;\n    border-radius: 2%;\n    box-shadow: 0 0 2vw #57e5ff;\n    transition: box-shadow 3s;\n    z-index: 999999999999999;\n}\n\n.node {\n    width: 1.70vw;\n    height: 1.8vw;\n    margin: 0 auto;\n    margin-top: 3px;\n    background: rgb(162, 247, 254);\n    opacity: 0;\n}\n\n#one {\n    margin-top: 2.0vw;\n}\n\n.circleWrapper{\n\tdisplay: none;\n}\n\n.circle {\n    position: absolute;\n    width: 7vw;\n    height: 7vw;\n    top: 22%;\n    left: 24%;\n    z-index: 999999999999999;\n}\n\n#circle_0 {\n    background: url(" + __webpack_require__(45) + ") no-repeat;\n    background-position: center;\n    background-size: 50%;\n}\n\n#circle_1 {\n    background: url(" + __webpack_require__(46) + ") no-repeat;\n    background-position: center;\n    background-size: 60%;\n    animation: 9.5s linear 0s normal none infinite counterLockWiseRotate;\n}\n\n#circle_2 {\n    background: url(" + __webpack_require__(47) + ") no-repeat;\n    background-position: center;\n    background-size: 90%;\n    animation: 9.5s linear 0s normal none infinite clockWiseRotate;\n}\n\n\n@-webkit-keyframes clockWiseRotate {\n    from {\n        -webkit-transform: rotate(0deg)\n    }\n    to {\n        -webkit-transform: rotate(360deg)\n    }\n}\n\n@-webkit-keyframes counterLockWiseRotate {\n    from {\n        -webkit-transform: rotate(360deg)\n    }\n    to {\n        -webkit-transform: rotate(0deg)\n    }\n}\n\n\n.cover{\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tbackground: #02062d;\n\topacity: 0.88;\n\tz-index: 999999999;\n}\n\n.quit{\n\tposition: absolute;\n\ttop: 4.6%;\n\tleft: 94%;\n\twidth: 2vw;\n\theight: 2vw;\n\tbackground: url(" + __webpack_require__(48) + ") no-repeat;\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\n\n\n", ""]);

// exports


/***/ }),
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
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_end_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_end_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_end_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ajax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Ajax_js__);



var w = document.body.clientWidth;
//var h = window.screen.availHeight;
var h = window.innerHeight;
var body = document.querySelector('body');

//动态设定总体高度
var mainWrapper = document.querySelector('.mainWrapper');
mainWrapper.style.height = body.style.height = h + 'px';


var title = document.querySelector('.title');
title.className = 'movingTitle';

var btn = document.querySelector('.yellow');

btn.addEventListener('mousedown', function() {
    btn.className = 'pressYellow';
}, false);

btn.addEventListener('mouseup', function() {
    btn.className = 'yellow';
}, false);

var UFO = document.querySelector('.UFO');
var blueMeteor = document.querySelector('.blueMeteor');
var purpleMeteor = document.querySelector('.purpleMeteor');
UFO.style.top = '42%';


// setInterval(function() {
//     if (UFO.style.top === '42%') {
//         UFO.style.top = '45%';
//     } else if (UFO.style.top === '45%') {
//         UFO.style.top = '42%';
//     }
// }, 1200);

moving(UFO, '42%', '45%', 1200);

function moving(target, init, range, time) {
    setInterval(function() {
        if (target.style.top === init) {
            target.style.top = range;
        } else if (target.style.top === range) {
            target.style.top = init;
        }
    }, time);
}


//webSocket
// var ws = new WebSocket('ws://wx.idsbllp.cn/gavagame/cet/luck?type=1');

// function getMessage(event) {
//     var data = event.data;
//     console.log(data);

// }

//抽奖
var bigPrizeHead = document.querySelector('#star');
var bigPrizeName = document.querySelector('#bigPrizeName');
var smallPrizeHead = document.querySelectorAll('.smallPrizeHead');
var smallPrizeName = document.querySelectorAll('.smallPrizeName');

smallPrizeName[0].style.opacity = smallPrizeName[1].style.opacity = 0;
smallPrizeName[2].style.opacity = smallPrizeName[3].style.opacity = 0;

//bigPrizeHead.src = 'http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg';

btn.addEventListener('click', prizeDraw, false);
var time = 0;
var url = 'http://wx.yyeke.com/171215game/master/luck' + window.location.search;

var dataObj;

function prizeDraw() {
    time++;

    if (time === 1) {

        __WEBPACK_IMPORTED_MODULE_1__Ajax_js___default()({
            url: url,
            method: 'GET',
            success: function(data) {
                //console.log(data);
                dataObj = JSON.parse(data);
                console.log(dataObj);
                console.log(bigPrizeHead);
                bigPrizeHead.src = dataObj.data[0].headimgurl;
                bigPrizeName.innerHTML = dataObj.data[0].nickname;
            },
            error: function(data) {
                console.log(data);
            }
        });


        //bigPrizeHead.src = dataObj.data[0].headimgurl;
        //bigPrizeName.innerHTML = dataObj.data[0].nickname;

        // 
        // $.ajax({
        //     url: url,
        //     type: 'GET',
        //     contentType: 'application/json',
        //     dataType: "JSONP",
        //     success: function(data) {
        //         console.log(data);
        //         var dataObj = JSON.parse(data);

        //         bigPrizeHead.src = dataObj.data[0].headimgurl;
        //         bigPrizeName.innerHTML = dataObj.data[0].nickname;
        //     },
        //     error: function(data) {
        //         console.log(data);
        //     }

        // });
    }
    if (time === 2) {

        for (var i = 0; i < smallPrizeHead.length; i++) {
            smallPrizeHead[i].src = dataObj.data[i + 1].headimgurl;
            smallPrizeName[i].innerHTML = dataObj.data[i + 1].nickname;
        }


        smallPrizeName[0].style.opacity = smallPrizeName[1].style.opacity = 1;
        smallPrizeName[2].style.opacity = smallPrizeName[3].style.opacity = 1;

    }
}

//抽奖详情

var baterryColor = ['rgb(162, 247, 254)', 'rgb(162, 247, 254)', 'rgb(149,226,251)',
    'rgb(125, 189, 246)', 'rgb(103, 155, 241)', 'rgb(82, 122, 257)',
    'rgb(62, 90, 232)', 'rgb(47, 67, 229)'
]

var shine;
var baterryaaa;

function bbb() {
    var baterry = document.querySelectorAll('.node');
    baterryaaa = setInterval(function() {
        for (var i = 0; i < baterry.length; i++) {
            baterry[i].style.transition = 'opacity ' + (7 - 1 * i) + 's,' + 'background 0.5s';
            baterry[i].style.opacity = '1';
            baterry[i].style.background = baterryColor[i];
        }
        baterry[0].style.opacity = '0';
    }, 300);


    shine = setInterval(function() {

        if (baterry[0].style.opacity == '1') {
            baterry[0].style.opacity = '0';
            baterry[0].style.transition = 'opacity 2s';
        } else if (baterry[0].style.opacity == '0') {
            baterry[0].style.opacity = '1';
        }
    }, 2000);
}


//进入抽奖详情
var luck = document.querySelectorAll('.luck');
for (var i = luck.length - 1; i >= 0; i--) {
    luck[i].addEventListener('click', function() {
        
        bbb();
        cover.style.display = details.style.display = baterry.style.display = circle.style.display = 'block';
        var userHead = details.querySelector('img');
        var nickname = details.querySelector('#nickname');
        var name = details.querySelector('#name');
        var studentNum = details.querySelector('#studentNum');

        var n;
        switch (this.id) {
            case 'star':
                n = 0;
                break;
            case 'a':
                n = 1;
                break;
            case 'b':
                n = 2;
                break;
            case 'c':
                n = 3;
                break;
            case 'd':
                n = 4;
                break;
            default:
                n = null;
                break;
        }

        userHead.src = dataObj.data[n].headimgurl;
        nickname.innerHTML = dataObj.data[n].nickname;

        if (dataObj.data[n].realname.length > 0) {
            name.innerHTML = dataObj.data[n].realname;
            studentNum.innerHTML = dataObj.data[n].usernumber;
        }
        
    }, false);
}



//退出详情页
var quit = document.querySelector('.quit');
var cover = document.querySelector('.cover');
var details = document.querySelector('.details');
var baterry = document.querySelector('.baterry');
var circle = document.querySelector('.circleWrapper');

quit.addEventListener('click', function() {
    var baterries = document.querySelectorAll('.node');
    for (var i = 0; i < baterries.length; i++) {
        baterries[i].style.opacity = '0';
    }
    setTimeout(function() {
        cover.style.display = details.style.display = baterry.style.display = circle.style.display = 'none';
    }, 200)
    clearInterval(shine);
    clearInterval(baterryaaa);
}, false);



// window.onbeforeunload = function(event) { 
//     alert(233);
// }; 

// window.onunload = function (event) {
//     alert('hahaahahah');
// }



//The end

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
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
		module.hot.accept(9, function() {
			var newContent = __webpack_require__(9);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d0d67cc43e8630d324e71c2132cda402.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2b24fb54f8294c08b0d483fb2b0687d7.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "36d12da3634ff62953388a2a7c8fdcf7.png";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAESElEQVRIiZWWXWgcVRSAv5ndpkl/TAuFFkyiQqLUF8EHq2j6kMaiRbAFURLBgptoYknVilqtPpS8pbXVCgopiwhCE0ki25A0YhKDa36ERpG2lK4hTdhsk9XQkN2dzWZnd8aHuZOdbO5s6YGFvWfOOd89Z+6ccxXfvPkN0Ixc0sCLwLDLc/zl1QD4wsEa4ApQ5GL6rb+8+h0AFWgBLrsYFgEdQKUbVAArhZ0b8LLgAKD45k2ALVjZ7HNxugk8AyxLnpUCY8DjLr5/ADX+8uqkrVD95dWKv7xaj169/hqmGXFx3At0Ap48vUfo5UDTjNz5fbJevIJiYBOgeFArPEBxqLNP3Vn18PiOqoeOKIqyWRKiEtgBDDh0XwKvS3mGEZ/pG6n75c2TUaBEAA0g60GtsHdcdLtvJLHrib03Sh8pewlFyc8KrPJHgavA20CrS4Z6eHiiaeitUzcEDKxDmQJ0jy8yy1/nvzPELjzTgcH5iuefjW7ZvatWGhAOAivAWTaWG4DF66FT/a8eHxTLjLCPA6uAqQL4wkFDKBJAKnCooSsRiba7QIuAM7ic1EQk2h441PCTWGZFdgkR3wDrk0GAs2JHCSDVtb/ubOrucq8LWJEpU3eXe7v2150TS8MBXBEbYB3UAU4CiWxaT/UebvpYTyQnXMDrRE8kJ3pfbvokm9ZNAbQrl3QCN0CFrIFjt+e0sc/Pv2vo+mwhoKHrs2OfnXsvNjOnAybWoZECpVBfOGhivfwkoE11DfyrLSwGCkG1hcXAVPfPSwKoA5rwzwhdYagDnAa0w/3+J7eX7XHrzQBsL9vTfPD7tn0CoolfWgaEXBuUip5IPrppa8kEirKzEBTANIzl6cDgCyPHW//GcVLvF1qK1TcfuxfQAZ7S5v97qvPpV5YK2UnLi/XRd7kBs2n9H5leUdXKbQ/u/tEXDkqbxr2gXwHSjpSOa8M9B944ko5rv7r41gr/+4I2A8dkxtnVdGik5fRHsZk5faTl9IfZ1XTIJe4xXzjoevjyoTVuuzQy2YXJtouN4aHxOEB4aDw22Xax0chkF1xiXxC3iYLQSqCb3FRYE9Mw4qFLvY3X2jsWyH2Lq9faO+ZCnX0NpmHEJbG9QLe4VUihpUA/1rzMl+yd0ckTo59+YZfS7lgxQBs9eebm/OifHyDpPCJevy8cLM2HekSGVRInlm5Ntw7Un/gtDxjHanNxIHml/v3hpVvT8tlqxe1xnmgVuAAckFknItH2ntqjlxxAewqt+sLBDLmmvtJTe/SHAuOwBvjaXih4n7P/e7AuaA9gXS+c79sgN4g11pfSA2wVfsUufjEczd/ryLgY2CZxNEVGGvKpYZdcxZqzxeTmrR3XvpmsAIZXGGwWwBLWX0HWGr8LUAZWsW4VNtgj4trglJfcYUIA0nnlSQmoPStl4hxpsLFatngA1UtuymckhobIQjoXJeC08LGzlsUy/gcN7NyXiGagdAAAAABJRU5ErkJggg=="

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODU1NTBkMTUzZDcwMDUyZDg1MjYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC/ljY7lurfmtbfmiqXkvZNXMTIoMSkv5Y2O5bq35rW35oql5L2TVzEyLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BamF4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvZW5kLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvZW5kLmNzcz83MTgwIiwid2VicGFjazovLy8uL3NyYy9pbWcvZW5kX2JhY2tncm91bmQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvZW5kX2JpZ1BsYW5lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2RldGFpbHNfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jaXJjbGVfMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jaXJjbGVfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jaXJjbGVfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9xdWl0LnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUEyRDtBQUMzRDtBQUNBO0FBQ0EsV0FBRzs7QUFFSCxvREFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7Ozs7QUFJQTtBQUNBLHNEQUE4QztBQUM5QztBQUNBO0FBQ0Esb0NBQTRCO0FBQzVCLHFDQUE2QjtBQUM3Qix5Q0FBaUM7O0FBRWpDLCtDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBc0M7QUFDdEM7QUFDQTtBQUNBLHFDQUE2QjtBQUM3QixxQ0FBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUEsNERBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQWEsNEJBQTRCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0w7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRCw0QztBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQSxTOzs7Ozs7QUN6UEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsaUNBQWlDLG94RTs7Ozs7O0FDQWpDLGlDQUFpQyx3OUU7Ozs7OztBQ0FqQyxpQ0FBaUMsZ2tMOzs7Ozs7QUNBakMsaUNBQWlDLDRnRCIsImZpbGUiOiJqcy9lbmQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0dGhpc1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSBcclxuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdFx0aWYocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0fSA7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gXHRcdHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcclxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xyXG4gXHRcdDtcclxuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XHJcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0aWYodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcclxuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcclxuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XHJcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdGlmKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcclxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XHJcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxyXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuIFx0XHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcclxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlKSB7XHJcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm47XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG5cbiBcdFxyXG4gXHRcclxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xyXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjg1NTUwZDE1M2Q3MDA1MmQ4NTI2XCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XHJcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xyXG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0aWYoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcclxuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XHJcbiBcdFx0XHRpZihtZS5ob3QuYWN0aXZlKSB7XHJcbiBcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcclxuIFx0XHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPCAwKVxyXG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XHJcbiBcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXF1ZXN0ICsgXCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICsgbW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XHJcbiBcdFx0fTtcclxuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xyXG4gXHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xyXG4gXHRcdFx0XHR9LFxyXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH07XHJcbiBcdFx0Zm9yKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xyXG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInJlYWR5XCIpXHJcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XHJcbiBcdFx0XHRcdHRocm93IGVycjtcclxuIFx0XHRcdH0pO1xyXG4gXHRcclxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcclxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xyXG4gXHRcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XHJcbiBcdFx0XHRcdFx0aWYoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xyXG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fTtcclxuIFx0XHRyZXR1cm4gZm47XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhvdCA9IHtcclxuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcclxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXHJcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcclxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxyXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxyXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxyXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcclxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcclxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcclxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRpZighbCkgcmV0dXJuIGhvdFN0YXR1cztcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcclxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxyXG4gXHRcdH07XHJcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xyXG4gXHRcdHJldHVybiBob3Q7XHJcbiBcdH1cclxuIFx0XHJcbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xyXG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcclxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcclxuIFx0fVxyXG4gXHRcclxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcclxuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XHJcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcclxuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3REZWZlcnJlZDtcclxuIFx0XHJcbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xyXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xyXG4gXHRcdHZhciBpc051bWJlciA9ICgraWQpICsgXCJcIiA9PT0gaWQ7XHJcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcImlkbGVcIikgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XHJcbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xyXG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoIXVwZGF0ZSkge1xyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XHJcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XHJcbiBcdFxyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xyXG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXHJcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcclxuIFx0XHRcdFx0fTtcclxuIFx0XHRcdH0pO1xyXG4gXHRcdFx0aG90VXBkYXRlID0ge307XHJcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDM7XHJcbiBcdFx0XHR7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3NcclxuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cclxuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcclxuIFx0XHRcdHJldHVybjtcclxuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGlmKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcclxuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcclxuIFx0XHRpZighaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xyXG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XHJcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XHJcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xyXG4gXHRcdGlmKCFkZWZlcnJlZCkgcmV0dXJuO1xyXG4gXHRcdGlmKGhvdEFwcGx5T25VcGRhdGUpIHtcclxuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXHJcbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cclxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcclxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcclxuIFx0XHRcdH0pLnRoZW4oXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdCk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XHJcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiBcdFxyXG4gXHRcdHZhciBjYjtcclxuIFx0XHR2YXIgaTtcclxuIFx0XHR2YXIgajtcclxuIFx0XHR2YXIgbW9kdWxlO1xyXG4gXHRcdHZhciBtb2R1bGVJZDtcclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcclxuIFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcclxuIFx0XHRcdFx0XHRpZDogaWRcclxuIFx0XHRcdFx0fTtcclxuIFx0XHRcdH0pO1xyXG4gXHRcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcclxuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xyXG4gXHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fbWFpbikge1xyXG4gXHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdGlmKCFwYXJlbnQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxyXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxyXG4gXHRcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcclxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xyXG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxyXG4gXHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFxyXG4gXHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxyXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXHJcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxyXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcclxuIFx0XHRcdH07XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XHJcbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XHJcbiBcdFx0XHRcdGlmKGEuaW5kZXhPZihpdGVtKSA8IDApXHJcbiBcdFx0XHRcdFx0YS5wdXNoKGl0ZW0pO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcclxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XHJcbiBcdFxyXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XHJcbiBcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCIpO1xyXG4gXHRcdH07XHJcbiBcdFxyXG4gXHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcclxuIFx0XHRcdFx0dmFyIHJlc3VsdDtcclxuIFx0XHRcdFx0aWYoaG90VXBkYXRlW2lkXSkge1xyXG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcclxuIFx0XHRcdFx0aWYocmVzdWx0LmNoYWluKSB7XHJcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHN3aXRjaChyZXN1bHQudHlwZSkge1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArIHJlc3VsdC5tb2R1bGVJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiIGluIFwiICsgcmVzdWx0LnBhcmVudElkICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGlzcG9zZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGRlZmF1bHQ6XHJcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGFib3J0RXJyb3IpIHtcclxuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcclxuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9BcHBseSkge1xyXG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdFx0XHRcdGZvcihtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihkb0Rpc3Bvc2UpIHtcclxuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxyXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRmb3IoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiYgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcclxuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcclxuIFx0XHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xyXG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xyXG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fSk7XHJcbiBcdFxyXG4gXHRcdHZhciBpZHg7XHJcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XHJcbiBcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0aWYoIW1vZHVsZSkgY29udGludWU7XHJcbiBcdFxyXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcclxuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XHJcbiBcdFx0XHRmb3IoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XHJcbiBcdFx0XHRcdGNiKGRhdGEpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcclxuIFx0XHJcbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxyXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcclxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXHJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXHJcbiBcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xyXG4gXHRcdFx0XHRpZighY2hpbGQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkge1xyXG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIGRlcGVuZGVuY3k7XHJcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKG1vZHVsZSkge1xyXG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGZvcihqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XHJcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcclxuIFx0XHRcdFx0XHRcdGlmKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XHJcbiBcdFxyXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXHJcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcbiBcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcclxuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XHJcbiBcdFx0XHRcdFx0XHRpZihjYikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihjYWxsYmFja3MuaW5kZXhPZihjYikgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcclxuIFx0XHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcclxuIFx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XHJcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIyKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0b3JnaW5hbEVycm9yOiBlcnIsIC8vIFRPRE8gcmVtb3ZlIGluIHdlYnBhY2sgNFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyMjtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcclxuIFx0XHRpZihlcnJvcikge1xyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcclxuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL3d4Lnl5ZWtlLmNvbS8xNzEyMTVnYW1lL2Rpc3RzL1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDQwKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODU1NTBkMTUzZDcwMDUyZDg1MjYiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDkyNGFkMTE4N2U2NDJlMTI5OGZmMjgzZjc5ZGY5YzQudHRmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9udC/ljY7lurfmtbfmiqXkvZNXMTIoMSkv5Y2O5bq35rW35oql5L2TVzEyLnR0ZlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNCIsImZ1bmN0aW9uIGFqYXgoIG9wdHMgKSB7XG5cbiAgICAvLzEu6K6+572u6buY6K6k5Y+C5pWwXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLCAvL+ivt+axguaWueW8j1xuICAgICAgICB1cmw6ICcnLCAvL+WPkemAgeivt+axgueahOWcsOWdgFxuICAgICAgICBkYXRhOiAnJywgLy/lj5HpgIHmlbDmja5cbiAgICAgICAgYXN5bmM6IHRydWUsLy/mmK/lkKblvILmraVcbiAgICAgICAgY2FjaGU6IHRydWUsLy/mmK/lkKbnvJPlrZhcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLC8vaHR0cOWktOS/oeaBr1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH07XG5cbiAgICAvLzIu6KaG55uW5Y+C5pWwXG4gICAgZm9yKCB2YXIga2V5IGluIG9wdHMgKSB7XG4gICAgICAgIGRlZmF1bHRzW2tleV0gPSBvcHRzW2tleV07XG4gICAgfTtcblxuICAgIC8vMy7mlbDmja7lpITnkIZcbiAgICBpZiAoIHR5cGVvZiBkZWZhdWx0cy5kYXRhID09PSAnb2JqZWN0JyApIHsgLy/lpITnkIZkYXRhXG4gICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgZm9yKCB2YXIga2V5IGluIGRlZmF1bHRzLmRhdGEgKSB7XG4gICAgICAgICAgICBzdHIgKz0ga2V5ICsgJz0nICsgZGVmYXVsdHMuZGF0YVtrZXldICsgJyYnXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdHMuZGF0YSA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgIH07XG5cbiAgICBkZWZhdWx0cy5tZXRob2QgPSBkZWZhdWx0cy5tZXRob2QudG9VcHBlckNhc2UoKTsgIC8v6K+35rGC5pa55byP5a2X56ym6L2s5o2i5oiQ5aSn5YaZXG5cbiAgICBkZWZhdWx0cy5jYWNoZSA9IGRlZmF1bHRzLmNhY2hlID8gJycgOiAnJicgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgLy/lpITnkIYg57yT5a2YXG5cblxuICAgIGlmICggZGVmYXVsdHMubWV0aG9kID09PSAnR0VUJyAmJiAoZGVmYXVsdHMuZGF0YSB8fCBkZWZhdWx0cy5jYWNoZSkgKSB7XG4gICAgICAgIGRlZmF1bHRzLnVybCArPSAnPycgKyBkZWZhdWx0cy5kYXRhICsgZGVmYXVsdHMuY2FjaGU7XG4gICAgfTtcblxuICAgIC8vNC7nvJblhplhamF4XG4gICAgdmFyIG9YaHIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBBY3RpdmVYb2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuXG5cbiAgICAvL+S4juacjeWKoeWZqOW7uueri+mTvuaOpe+8jOWRiuivieacjeWKoeWZqOS9oOimgeWBmuS7gOS5iFxuICAgIG9YaHIub3BlbihkZWZhdWx0cy5tZXRob2QsIGRlZmF1bHRzLnVybCwgZGVmYXVsdHMuYXN5bmMpO1xuXG4gICAgLy/lj5HpgIHor7fmsYJcbiAgICBpZiAoIGRlZmF1bHRzLm1ldGhvZCA9PT0gJ0dFVCcgKSB7XG4gICAgICAgIG9YaHIuc2VuZChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvWGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgZGVmYXVsdHMuY29udGVudFR5cGUpO1xuICAgICAgICBvWGhyLnNlbmQoZGVmYXVsdHMuZGF0YSk7XG4gICAgfVxuXG4gICAgLy/nrYnku6PmnI3liqHlmajlm57ppohcbiAgICBvWGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCBvWGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG4gICAgICAgICAgICBpZiAob1hoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnN1Y2Nlc3MuY2FsbChvWGhyLCBvWGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzLmVycm9yKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWpheDtcblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9BamF4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIS0hCJztcXG4gICAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udC/ljY7lurfmtbfmiqXkvZNXMTIoMSkv5Y2O5bq35rW35oql5L2TVzEyLnR0ZlwiKSArIFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5odG1sIHt9XFxuXFxuYm9keSB7fVxcblxcbi53cmFwcGVyIHtcXG4gICAgbWluLXdpZHRoOiAxNDMwcHg7XFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMTUxODg2O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLndyYXBwZXJfMCB7XFxuICAgIG1pbi13aWR0aDogMTQzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9lbmRfYmFja2dyb3VuZC5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAxNDMwcHg7XFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2VuZF9iaWdQbGFuZS5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMDAlO1xcbn1cXG5cXG5cXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwMHB4KSBhbmQgKG1heC13aWR0aDoxNjAwcHgpIHtcXG4gICAgLm1haW5XcmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTcwMHB4KSBhbmQgKG1heC13aWR0aDoxOTAwcHgpIHtcXG4gICAgLm1haW5XcmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTkwMHB4KSBhbmQgKG1heC13aWR0aDoyNDAwcHgpIHtcXG4gICAgLm1haW5XcmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMDAlO1xcbiAgICB9XFxufSovXFxuXFxuaW1nLnRpdGxlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICB0b3A6IDQlO1xcbn1cXG5cXG5pbWcubW92aW5nVGl0bGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gICAgdG9wOiA0JTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAycztcXG59XFxuXFxuaW1nLm11c2ljIHtcXG4gICAgbWFyZ2luLXRvcDogMyU7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcblxcbi5sdWNreVN0YXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAzOSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA0JTtcXG59XFxuXFxuaW1nLmx1Y2t5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmltZy5sdWNreVVzZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMiU7XFxuICAgIHRvcDogNDklO1xcbiAgICBsZWZ0OiA0NC41JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubHVja3lTdGFyIHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IC0zJTtcXG4gICAgZm9udC1mYW1pbHk6IEhLSEI7XFxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XFxuICAgIGNvbG9yOiAjZjQ3MDgwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vdGhlckx1Y2t5IHtcXG4gICAgd2lkdGg6IDYyJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbn1cXG5cXG4ubGl0dGxlVGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcblxcbi51c2VySGVhZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogOCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA2LjIlO1xcbn1cXG5cXG4ubHVja3tcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vdGhlckx1Y2t5IC5maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjUlO1xcbn1cXG5cXG5cXG4udXNlckhlYWQgLmJhY2tncm91bmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVzZXJIZWFkIC51c2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiA4JTtcXG59XFxuXFxuLnVzZXJIZWFkIHAge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOCU7XFxuICAgIGZvbnQtZmFtaWx5OiBIS0hCO1xcbiAgICBmb250LXNpemU6IDF2dztcXG4gICAgY29sb3I6ICNmNDcwODA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xcbn1cXG5cXG4uYnRuIC5ibHVlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uYnRuIC55ZWxsb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA4NCU7XFxuICAgIHotaW5kZXg6IDUwMDA7XFxuICAgIHRvcDogMTMlO1xcbiAgICBsZWZ0OiA3JTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuIC5wcmVzc1llbGxvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgei1pbmRleDogNTAwMDtcXG4gICAgdG9wOiAxNSU7XFxuICAgIGxlZnQ6IDglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZy5hc3Ryb25hdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgdG9wOiA1NiU7XFxuICAgIGxlZnQ6IDcwJTtcXG59XFxuXFxuaW1nLlVGTyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDglO1xcbiAgICB0b3A6IDQyJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxufVxcblxcbi5ibHVlTWV0ZW9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNCU7XFxuICAgIHRvcDogMzMlO1xcbiAgICBsZWZ0OiAyNSU7XFxufVxcblxcbi5wdXJwbGVNZXRlb3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA2JTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDgwJTtcXG59XFxuXFxuLm5wYyB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5kZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiAzMy4ydnc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNiU7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9kZXRhaWxzXzEucG5nXCIpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5O1xcbn1cXG5cXG4uZGV0YWlsc191c2VySGVhZCB7XFxuICAgIHdpZHRoOiA4Ljh2dztcXG4gICAgaGVpZ2h0OiA4Ljh2dztcXG4gICAgYmFja2dyb3VuZDogcGluaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNi44dnc7XFxufVxcblxcbi5kZXRhaWxzX3VzZXJIZWFkIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI25pY2tuYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IEhLSEI7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBjb2xvcjogIzU3ZTVmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzLjV2dztcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA3dncgIzU3ZTVmZjtcXG59XFxuXFxuI25hbWVzIHtcXG4gICAgZm9udC1mYW1pbHk6IEhLSEI7XFxuICAgIGZvbnQtc2l6ZTogMS44dnc7XFxuICAgIGNvbG9yOiAjNTdlNWZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIuNXZ3O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDV2dyAjNTdlNWZmO1xcbn1cXG5cXG4jc3R1ZGVudE51bSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNHZ3O1xcbn1cXG5cXG4uYmF0ZXJyeSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDM2JTtcXG4gICAgbGVmdDogNzQlO1xcbiAgICB3aWR0aDogMi40dnc7XFxuICAgIGhlaWdodDogMTguM3Z3O1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCAjNTdlNWZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJ2dyAjNTdlNWZmO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDNzO1xcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk7XFxufVxcblxcbi5ub2RlIHtcXG4gICAgd2lkdGg6IDEuNzB2dztcXG4gICAgaGVpZ2h0OiAxLjh2dztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE2MiwgMjQ3LCAyNTQpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jb25lIHtcXG4gICAgbWFyZ2luLXRvcDogMi4wdnc7XFxufVxcblxcbi5jaXJjbGVXcmFwcGVye1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA3dnc7XFxuICAgIGhlaWdodDogN3Z3O1xcbiAgICB0b3A6IDIyJTtcXG4gICAgbGVmdDogMjQlO1xcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk7XFxufVxcblxcbiNjaXJjbGVfMCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWcvY2lyY2xlXzAucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG59XFxuXFxuI2NpcmNsZV8xIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9jaXJjbGVfMS5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbiAgICBhbmltYXRpb246IDkuNXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIGNvdW50ZXJMb2NrV2lzZVJvdGF0ZTtcXG59XFxuXFxuI2NpcmNsZV8yIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9jaXJjbGVfMi5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlO1xcbiAgICBhbmltYXRpb246IDkuNXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIGNsb2NrV2lzZVJvdGF0ZTtcXG59XFxuXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGNsb2NrV2lzZVJvdGF0ZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxcbiAgICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBjb3VudGVyTG9ja1dpc2VSb3RhdGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcXG4gICAgfVxcbn1cXG5cXG5cXG4uY292ZXJ7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRiYWNrZ3JvdW5kOiAjMDIwNjJkO1xcblxcdG9wYWNpdHk6IDAuODg7XFxuXFx0ei1pbmRleDogOTk5OTk5OTk5O1xcbn1cXG5cXG4ucXVpdHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA0LjYlO1xcblxcdGxlZnQ6IDk0JTtcXG5cXHR3aWR0aDogMnZ3O1xcblxcdGhlaWdodDogMnZ3O1xcblxcdGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWcvcXVpdC5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvZW5kLmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgJy4uL2Nzcy9lbmQuY3NzJztcbmltcG9ydCBhamF4IGZyb20gJy4vQWpheC5qcyc7XG5cbnZhciB3ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbi8vdmFyIGggPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0O1xudmFyIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG52YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy/liqjmgIHorr7lrprmgLvkvZPpq5jluqZcbnZhciBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluV3JhcHBlcicpO1xubWFpbldyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gYm9keS5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcblxuXG52YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbnRpdGxlLmNsYXNzTmFtZSA9ICdtb3ZpbmdUaXRsZSc7XG5cbnZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVsbG93Jyk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcbiAgICBidG4uY2xhc3NOYW1lID0gJ3ByZXNzWWVsbG93Jztcbn0sIGZhbHNlKTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbigpIHtcbiAgICBidG4uY2xhc3NOYW1lID0gJ3llbGxvdyc7XG59LCBmYWxzZSk7XG5cbnZhciBVRk8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVUZPJyk7XG52YXIgYmx1ZU1ldGVvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVlTWV0ZW9yJyk7XG52YXIgcHVycGxlTWV0ZW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1cnBsZU1ldGVvcicpO1xuVUZPLnN0eWxlLnRvcCA9ICc0MiUnO1xuXG5cbi8vIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuLy8gICAgIGlmIChVRk8uc3R5bGUudG9wID09PSAnNDIlJykge1xuLy8gICAgICAgICBVRk8uc3R5bGUudG9wID0gJzQ1JSc7XG4vLyAgICAgfSBlbHNlIGlmIChVRk8uc3R5bGUudG9wID09PSAnNDUlJykge1xuLy8gICAgICAgICBVRk8uc3R5bGUudG9wID0gJzQyJSc7XG4vLyAgICAgfVxuLy8gfSwgMTIwMCk7XG5cbm1vdmluZyhVRk8sICc0MiUnLCAnNDUlJywgMTIwMCk7XG5cbmZ1bmN0aW9uIG1vdmluZyh0YXJnZXQsIGluaXQsIHJhbmdlLCB0aW1lKSB7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0YXJnZXQuc3R5bGUudG9wID09PSBpbml0KSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gcmFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnN0eWxlLnRvcCA9PT0gcmFuZ2UpIHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBpbml0O1xuICAgICAgICB9XG4gICAgfSwgdGltZSk7XG59XG5cblxuLy93ZWJTb2NrZXRcbi8vIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vd3guaWRzYmxscC5jbi9nYXZhZ2FtZS9jZXQvbHVjaz90eXBlPTEnKTtcblxuLy8gZnVuY3Rpb24gZ2V0TWVzc2FnZShldmVudCkge1xuLy8gICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuLy8gfVxuXG4vL+aKveWlllxudmFyIGJpZ1ByaXplSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFyJyk7XG52YXIgYmlnUHJpemVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JpZ1ByaXplTmFtZScpO1xudmFyIHNtYWxsUHJpemVIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYWxsUHJpemVIZWFkJyk7XG52YXIgc21hbGxQcml6ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21hbGxQcml6ZU5hbWUnKTtcblxuc21hbGxQcml6ZU5hbWVbMF0uc3R5bGUub3BhY2l0eSA9IHNtYWxsUHJpemVOYW1lWzFdLnN0eWxlLm9wYWNpdHkgPSAwO1xuc21hbGxQcml6ZU5hbWVbMl0uc3R5bGUub3BhY2l0eSA9IHNtYWxsUHJpemVOYW1lWzNdLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4vL2JpZ1ByaXplSGVhZC5zcmMgPSAnaHR0cDovL2ltZzA1LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDEyMS90b29vcGVuX3N5XzE1NTE2ODE2MjgyNi5qcGcnO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcml6ZURyYXcsIGZhbHNlKTtcbnZhciB0aW1lID0gMDtcbnZhciB1cmwgPSAnaHR0cDovL3d4Lnl5ZWtlLmNvbS8xNzEyMTVnYW1lL21hc3Rlci9sdWNrJyArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cbnZhciBkYXRhT2JqO1xuXG5mdW5jdGlvbiBwcml6ZURyYXcoKSB7XG4gICAgdGltZSsrO1xuXG4gICAgaWYgKHRpbWUgPT09IDEpIHtcblxuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGRhdGFPYmogPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFPYmopO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJpZ1ByaXplSGVhZCk7XG4gICAgICAgICAgICAgICAgYmlnUHJpemVIZWFkLnNyYyA9IGRhdGFPYmouZGF0YVswXS5oZWFkaW1ndXJsO1xuICAgICAgICAgICAgICAgIGJpZ1ByaXplTmFtZS5pbm5lckhUTUwgPSBkYXRhT2JqLmRhdGFbMF0ubmlja25hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvL2JpZ1ByaXplSGVhZC5zcmMgPSBkYXRhT2JqLmRhdGFbMF0uaGVhZGltZ3VybDtcbiAgICAgICAgLy9iaWdQcml6ZU5hbWUuaW5uZXJIVE1MID0gZGF0YU9iai5kYXRhWzBdLm5pY2tuYW1lO1xuXG4gICAgICAgIC8vIFxuICAgICAgICAvLyAkLmFqYXgoe1xuICAgICAgICAvLyAgICAgdXJsOiB1cmwsXG4gICAgICAgIC8vICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgLy8gICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIC8vICAgICBkYXRhVHlwZTogXCJKU09OUFwiLFxuICAgICAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvLyAgICAgICAgIHZhciBkYXRhT2JqID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICAvLyAgICAgICAgIGJpZ1ByaXplSGVhZC5zcmMgPSBkYXRhT2JqLmRhdGFbMF0uaGVhZGltZ3VybDtcbiAgICAgICAgLy8gICAgICAgICBiaWdQcml6ZU5hbWUuaW5uZXJIVE1MID0gZGF0YU9iai5kYXRhWzBdLm5pY2tuYW1lO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIGlmICh0aW1lID09PSAyKSB7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbWFsbFByaXplSGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc21hbGxQcml6ZUhlYWRbaV0uc3JjID0gZGF0YU9iai5kYXRhW2kgKyAxXS5oZWFkaW1ndXJsO1xuICAgICAgICAgICAgc21hbGxQcml6ZU5hbWVbaV0uaW5uZXJIVE1MID0gZGF0YU9iai5kYXRhW2kgKyAxXS5uaWNrbmFtZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc21hbGxQcml6ZU5hbWVbMF0uc3R5bGUub3BhY2l0eSA9IHNtYWxsUHJpemVOYW1lWzFdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBzbWFsbFByaXplTmFtZVsyXS5zdHlsZS5vcGFjaXR5ID0gc21hbGxQcml6ZU5hbWVbM10uc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgICB9XG59XG5cbi8v5oq95aWW6K+m5oOFXG5cbnZhciBiYXRlcnJ5Q29sb3IgPSBbJ3JnYigxNjIsIDI0NywgMjU0KScsICdyZ2IoMTYyLCAyNDcsIDI1NCknLCAncmdiKDE0OSwyMjYsMjUxKScsXG4gICAgJ3JnYigxMjUsIDE4OSwgMjQ2KScsICdyZ2IoMTAzLCAxNTUsIDI0MSknLCAncmdiKDgyLCAxMjIsIDI1NyknLFxuICAgICdyZ2IoNjIsIDkwLCAyMzIpJywgJ3JnYig0NywgNjcsIDIyOSknXG5dXG5cbnZhciBzaGluZTtcbnZhciBiYXRlcnJ5YWFhO1xuXG5mdW5jdGlvbiBiYmIoKSB7XG4gICAgdmFyIGJhdGVycnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9kZScpO1xuICAgIGJhdGVycnlhYWEgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXRlcnJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBiYXRlcnJ5W2ldLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAnICsgKDcgLSAxICogaSkgKyAncywnICsgJ2JhY2tncm91bmQgMC41cyc7XG4gICAgICAgICAgICBiYXRlcnJ5W2ldLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBiYXRlcnJ5W2ldLnN0eWxlLmJhY2tncm91bmQgPSBiYXRlcnJ5Q29sb3JbaV07XG4gICAgICAgIH1cbiAgICAgICAgYmF0ZXJyeVswXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0sIDMwMCk7XG5cblxuICAgIHNoaW5lID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKGJhdGVycnlbMF0uc3R5bGUub3BhY2l0eSA9PSAnMScpIHtcbiAgICAgICAgICAgIGJhdGVycnlbMF0uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIGJhdGVycnlbMF0uc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDJzJztcbiAgICAgICAgfSBlbHNlIGlmIChiYXRlcnJ5WzBdLnN0eWxlLm9wYWNpdHkgPT0gJzAnKSB7XG4gICAgICAgICAgICBiYXRlcnJ5WzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH1cbiAgICB9LCAyMDAwKTtcbn1cblxuXG4vL+i/m+WFpeaKveWlluivpuaDhVxudmFyIGx1Y2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubHVjaycpO1xuZm9yICh2YXIgaSA9IGx1Y2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsdWNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgICAgICBiYmIoKTtcbiAgICAgICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IGRldGFpbHMuc3R5bGUuZGlzcGxheSA9IGJhdGVycnkuc3R5bGUuZGlzcGxheSA9IGNpcmNsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdmFyIHVzZXJIZWFkID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgdmFyIG5pY2tuYW1lID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCcjbmlja25hbWUnKTtcbiAgICAgICAgdmFyIG5hbWUgPSBkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gICAgICAgIHZhciBzdHVkZW50TnVtID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCcjc3R1ZGVudE51bScpO1xuXG4gICAgICAgIHZhciBuO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaWQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICBuID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIG4gPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgbiA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG4gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlckhlYWQuc3JjID0gZGF0YU9iai5kYXRhW25dLmhlYWRpbWd1cmw7XG4gICAgICAgIG5pY2tuYW1lLmlubmVySFRNTCA9IGRhdGFPYmouZGF0YVtuXS5uaWNrbmFtZTtcblxuICAgICAgICBpZiAoZGF0YU9iai5kYXRhW25dLnJlYWxuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gZGF0YU9iai5kYXRhW25dLnJlYWxuYW1lO1xuICAgICAgICAgICAgc3R1ZGVudE51bS5pbm5lckhUTUwgPSBkYXRhT2JqLmRhdGFbbl0udXNlcm51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LCBmYWxzZSk7XG59XG5cblxuXG4vL+mAgOWHuuivpuaDhemhtVxudmFyIHF1aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpdCcpO1xudmFyIGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG52YXIgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJyk7XG52YXIgYmF0ZXJyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXRlcnJ5Jyk7XG52YXIgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpcmNsZVdyYXBwZXInKTtcblxucXVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBiYXRlcnJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9kZScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmF0ZXJyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJhdGVycmllc1tpXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gZGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gYmF0ZXJyeS5zdHlsZS5kaXNwbGF5ID0gY2lyY2xlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMjAwKVxuICAgIGNsZWFySW50ZXJ2YWwoc2hpbmUpO1xuICAgIGNsZWFySW50ZXJ2YWwoYmF0ZXJyeWFhYSk7XG59LCBmYWxzZSk7XG5cblxuXG4vLyB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihldmVudCkgeyBcbi8vICAgICBhbGVydCgyMzMpO1xuLy8gfTsgXG5cbi8vIHdpbmRvdy5vbnVubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIGFsZXJ0KCdoYWhhYWhhaGFoJyk7XG4vLyB9XG5cblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9lbmQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2VuZC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZW5kLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9lbmQuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvZW5kLmNzc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDBkNjdjYzQzZTg2MzBkMzI0ZTcxYzIxMzJjZGE0MDIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL2VuZF9iYWNrZ3JvdW5kLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmIyNGZiNTRmODI5NGMwOGIwZDQ4M2ZiMmIwNjg3ZDcucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL2VuZF9iaWdQbGFuZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2ZDEyZGEzNjM0ZmY2Mjk1MzM4OGEyYTdjOGZkY2Y3LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9kZXRhaWxzXzEucG5nXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEb0FBQUE2Q0FZQUFBRGh1MG9vQUFBR2tFbEVRVlJvZ2IyYnoyOVVWUlRIUDNkbSt0TkN5MURhYXRwb1NpT2lhRjJpUVdOMEFheUlqWWxydzhZWUU5RzFZa1gvQUlLSllZRTdGeTdrMThxZ0NmNkN4SVNOSVlKSWFCVUt0STIwbEVJN0hkcVo2Nkl6NDVzNzUvNTZiZndtTCsrKzgrNDk5M3pldWZlK0g1MnFveGMwNnlpMW5zNkFkUXN1dDhiMklXQ2g4QktVMlRZMWVGcFFXL0ErS0ZmZ1Vsc1RURm5zWHNXQ1NzR0Uya0w5d1g4Z1NyQWw3Y0hBTWFCbVVMSEhvZExJZ0FvNXcwR3dJYUMraklXVTB5b0piWmJOZnB6QVB0RFFyTGtBUTRCdGdadmwxTmwxZ2JvQ2xzcHJ5YXdacEEweUpMc2lyQTAwQk5JRnVGNUQySnl2U1pzdHV5SnM3QnoxUWJyT3A1VUpaTzdCa2NtcUpORFFJU3J0MDJaVXlweXRUZ2hzQTdnSjZuc1E4TUg1aHJGTnljQjh3OVVGYS9NWnRCakZRc1ptMWpZMGJWbE9BMTBIbW1hWWhvSzZzaHA2MDNldHhON2hITE1ZK1NCRGhuRklYNjRGeGdkclZSVTA5QmJoZy9SbFU1cDdWWHZRL1pDd0I0a0dtMjB4OHMyMzVEa1hxRy9vMmdMMlNRSnorb2w1TXFyYXBDMWpPYzlZbnY3NVZ0NG9LWFpweFRhZ0cxaFdjQnZOUkZaemZrT1JrME16WEU4RUdRdWNqRThjSmFyeWhTRjBKUTNleHZNTTNHM2pZRm14RDhnQ0Q1WG1Md1hUd0VNTld5cmdyVUE1b3ptMXFjQ2h3VmttRXJBeEc2NXl6b0RCVWphSHBRMCtBM0N4ajczRkhFZUJEcVg1dGJuRXNjZnU4MFAzQWc4UzdibmZRdlAxTGw1YXl2Rk9XVEV5MDg3dSt5MjhQenpKY2V5UzNsVk5lOFBRVmtjdjZOaFYxUVNycy8zMktHOHZaL2tVbUd0ZDRjQ3pVNXl4QkZZWDRPKzl2RnBvNGdqUTNWVGk0UE9UZkVGajFzcUN6WmJWNUhGdGJsWGxXM0NrQzFHelhleGpaRG5MWndxdWJWNWtUd1hTckd0S0FXckhOR2UzTExCYmFhNHVaemwwc1k4Uld6K1dXS1RZYXpKQms0MXRRVW1kcXZFOEE4VWNoNEYvdGp6Z3pjSFoydUlpQlNSZXJDZnVjcXZ2QVNQQVpESEg0YkU4L2E3NmpoZ2J6a21nUG9rZDNtM2pJK0NSdG1YZWUzeU8yOVJEbW0ydGkxNy9QZTYwTC9NdTBEN1h4cWpEUjVTU3R3VkpVbERtZWNieURKUVZyMmMwUCsrWTVxeFEzeGFjNUZzOU04MzVqT2I3c21MZldKNEJWOThPMzNYMVhCbDFqZm02QU9kYkdRRXlMU3NjQy9Uam5FOEFMU3Q4Q1dRcXZsMTNCSmZmbXRJTzNUcVZGTHVBNHNBOWZzU2RmZDhjcTlrR1p6a0hMRlI4dTlvRUtRbWF4b2tDMElydFN2Tm41eEpGNmJ5dnZXUnZYMlpGYWE1cHhmYUlkdFo2YVRJcWFiTmFmZUx4ZGhoVFI4RVVzRG5DaDFYckJmcC9LUGlydktUMUFwM1IwT000SC9waWJScDZnWm5VVVNXVUJFMXp4VmJmQ0RSWHRHTGJmQXROaGg5YjJkZW5MalNSMVlvaHBma2pvcDIxWHBxTU5uU1MxZndDdE43bzRoVlBNTkt6YWJKdXpUYWU1d1dnSTZzNUo1MlBsUXRVK295UkxOYzYzMWprSkZBdTVuakw0c2NWb0FpeGxHTS9VSzc0ZHNVUjFFOG1VY2tXUk1PYmdOblIxaGx1WkRTbnk0clhMdlh5c3FXKzl3MmpXcjdjdzg2eVltOUdjM3JyRERjQ2Zka2t2cjJFU0J4Mm13cDhBaXdzTm5Ia1ppZmRqa0NjSStWbUovbkZaajRIRnJzS2pPSy8yRko4RFpKQVhWZEl1cW9hMElPelREU1hPQUQwVFhWd2ZLS1RIbGQ5b1I5OWF5T2JwanI0V3NOQWM0a0RXMmU1YWZRYmxjV2tURkRwYXZ0ZWJHdTI0VWxPTkpYNFVDdWVuTnJBdDVkNjJXV3AzK0Q3Y2c4N0p6ZnluVlk4bHl2ejhmQWtKeHg5dStJVFdWeGZHSkpsNlMybTRldENkVXQrU3Nsb3pyU3M4RlgvUEQ5MUZlb2ZFUXROWk1menZMaVVZMzlac1FkWWJDN3h3ZkFrM3dnUTVoY0dLc2Ntc0hsQmRCWFVCMmtEZG01amVmcm4yaGl0ZkJ6TEFBV2x1VnA1VkZ6UzBLY1ZUd01kckg0Y085MVZZTFF5WEczRHZBcHJ3dGtBYTJVSlZJSk1CUXNObnp1Zll2VnpKOEFkcGJtUzFaemJVT1RVMEF4L0MwR0diZ2h0NjJ3bXFBUVpDMnpXd1dodnlqYm5Rb0N0WUtaZjJ3ZHNYUW1zV2xrbGJHWndwcEx0UXR1SXdYazIwNmRrcXltWE9LbU1zczFtd2tnQksrTVl3akphUFhabDFXd1haQXY1YTVvSjdvS1ZMbzZ0cnRuTzNBY3RNc2JlcWlTb0s2c3hzTGIyMWZwbVBiTWNBaDJ5cnl1N01ob0ttMVJvNWx6bmZJdFR5TDVCSnFnNXYweDdLTFJ0UWJMSk5rK0oyRHQ5U2htMXpiT1l6Q1lWVXNjTXpIcWJzT3hkWlNCdU1VcVdiU3Z6V2hRTDVBUXo1YnVQU3NjaHc5WGx5OWFmN1RnMmV5SjB5R0prT3JBOVNQaFdZcGRzRjhncys3SVl2QmhKRGFWYlF1aURST3l3RHNtc3paK3pqOUE1Q3VIWnhYSWNxbEJZbDYxQk1iL0F0bVVYMWcvUzlHczc5dGtiRlB1YmV0OFRqbStvdXA2TVhQMkYycTFLKzE4U1B1Q2twQ0h2OGhuU2I3VFcrbjh2MGkzR1YyY3QvbFByWDg5cUxjWmROa3VuQUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL2NpcmNsZV8wLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUhJa2xFUVZSNG5PM2NlNHhjVlIwSDhNOU9rYmEwV3NBdURiVFdVb2dQbXFMZ0E1QmROSWdGZ3BBMG9iNHEwclFTVFVxaW9pUW9QcUpJSkJoTmpEU0NpZGFFZDVHZ2FLSzBOZWkyTkNIbG9XTFJHSlVLaXhXYVZycFVZSzJkOVkvZm1jN3NkTGM3anp0enA3TitrODJkdVhmdU9kL2ZiOC9yOXppblo5V09FVGxnRnViak5aaVpyakNFZjJNUG5rN1hYSEJFRytxWWpyTndMczdFcWVpdDhkMWQrQjIyNGlFOGlMMHQ0SGdRZXRyUVlrN0VrNWlXUVZuL3hXK3dEbmRyWVlzcXRLcmdDanlGYjJLLzZCNS94ZlBwKzBRbzRwVjBKVnI0ZTNFTGRtQXQzcEl4WDdTK3hTekdaZmd3NWxYY0g4UTJvYlJkZUJFdnBHZEhpM0ZudG1odGk2cmUzWThwVmZYOERGL0diN01pM2dyRkZIQXByc2JiMDcxQi9Cd2J4Rmp4WEoxbHpzSFplQi9lcjZ5b0VmU2t6MFZjTHhUVU5MSlVUQTgraEsvZ2pSakdYZmdoTml0M2gyWlJRQjlXaXBaNHBMS0NWcVg2TXFra0M1d2lab3c3eEgvejJ6Z0pLekFnTzZWSVpRMmtzaGVtdWw1Snp6NG11bDdUYUZZeEJWd3IrblkvZmlER2hjL2kyU2JMcmdYUHBycGVuK3J1eCtQNG9pWmxhK2JsWHZ3Q1g4ZjJST3JqMk5rTW9RYXhNOVhkbjdoY2w3alZ1bDQ2Q0kwcVpqRWV4UkxjanJkaFM2TWtNc1FXbkM0NExjRmpnbXZkYUVReGZkaUVFM0FsUGlxbTIwN0JYc0hwU2h3dnVQYlZXMGk5aWprREQyQXFsbUZOdlJXMkVXc0V4Nm1DOHhuMXZGeVBZaGFKaGRRVVhJejc2cWtvSjl3bnVFNFIzR3Vlc1dwVnpCejhFc2ZpQTloWUo4RThzVkZ3UGxiSWNGd3RMOVdpbUNuQ2FKdUhUK1ArQmdubWlmdnhLU0hEcldxUXV4YkZYSXR6Y0NkdWFvWmR6bGdqRnFCTGNNMUVQeDdQSkZpSlAyTzNXTHc5SmV5ZVRwcDlHc0dyOFloWWhKNG1ETmt4TVZhTFdTQzBPeUFHckNOd2hjTmZLWVFNVndpWjFpZ2JvQWRoTE1WY28reFVXb2piaEpLNkJRTkNwbmNMbzNkTVZIZWx1Zmlic0ZqM0NvMmVqSCsyakdZK21JTy9DRnZyRkdNWXVkVXQ1bk5DS1lTejZQdTZUeW1FUCtpN3dqMXk2VmcvcUd3eDAvRVA0VUViRWl2R2hlbGVONklYZjhjZmhhMDNDcFV0WnFsUUNoSE91RWYzS29Xd3lPOFZSdWM3cWg5V0ttWlp1cjZjcnJlMmxsZEhvQ1RqOG5TZEwzck9BY1ZNdy9ucGMxRzBsTU5wMmQ4b05ncFpsK0ZyK0JQZVJWa3hmWkttTUFNL2xhMDdzbE5SRkxLZWdNOExIWnhMV1RIOUZUK0U5ZTFrbHpOS3NwYkcwek1wSythZDZUcVVyZysxaVZRbm9DUnJhWHBlVEZreGl5c2VQaTBmdjIxZTJJbG54UEtFbU1abkZjUkNibTY2T2RNaERLc3V4aC93Mm9ydjh3dDRYY1dOVndrdisyVERkaUY3Q2NjVmpOWVUzV2tDVElUcWtQRXhCZUdqcU1UdU5wSHBKT3lxK241a2FZeXBSQzNwR2QyR2FwbUxCYVA3MXY4UmVMR0FmVlUzcTd2V1pFQzF6SHNLeWdrN0pWUjNyY21BYXNXOFVIRHdZRHU3VFdRNkNaVXo4d2kyRjR4ZXQrd1R6dkRKaGdYS0EvQWc5aGJFVkZYS2ZoeVNVZUxOWVlaRklnT01DQnNkc0pXZVNOY1I0YXhwT0sva01FU3ZrTGtVR2RsS1dUR1BwbXNwUS92czl2SEtIU1ZaUzdwNHNQTExGdEZhZnBXK0wya2ZyOXhSS2V0L1JDTGxBY1ZzRUo2cmkwU3M1V0x0U1k3T0d6MUMxdExBdXdrdlVSYitYL2kxYURVL0Zsa0JrNkU3OVFsWlN3blY5NVFlak5VcWJrL1hWUzBtMVFsWVdmSDVaWkh1Z3JFVnMxV2toSDVRNUxCMUszcEY3THJrMGx3bmVnN0dIMGR1Rk5QWDFTMmxsaTgrSTJUc0VVR0FHeW9manBjZlV4Q2h5N2tpdzd2ZTNQOU94eHl4QytZb29aaDdWY1d3eDJzeFJSR0FtaUZhVDdmaFJpRmJqNWlScnF2K3dhR201RHRFTHNsbEl0V3NXOUF2WkJvUUU4d05ZaGZkS0V5MCsyU1JHSWk3SmRWc3BsamxONVJxVm9sdFlxL0FHM0J6VnV4eXhDMUNscSthSUV4VXkrcjJldEhzUG9MVlRWUExENnVGRE92eGpZbCtYSXRpOW9zRTRrRjhCNWMwd3k0blhDSzRENHJ4WmNLRWhWcnRvZWR3Z2ZEMjNZM3pHaVNZQjg0VGk3ZmRRb2JuYTNtcEhrTnhtekM0aWlMTmRXbWRCUFBBVXNGMXYrQmVjL2k1WGd2NllaRmdOQ3dNcms0ZWMxWUxqc09DODhQMXZOeUlhMkd6V0F2c0VDbjB0K21zeU1KTXdla213ZkVjeWNkU0R4cjF1VHdoa3ZyV2kveTFSOFF4QlhuakxHRUVMeGZjVHNmdkd5bW9HV2ZVVGx5SUx3bDdhck5ZNitRUmZwbU43eVVPSnlkT0Yyb2l6NmRaTDExUkxBRGZLc0l3bnhDcjVHOXBqOHZpK0ZUWGRueFNLT2EweEttcEhNS3MzSmZIaUdYMlNQcTdTaWhvcmVqaldicEpDNm5NdGFtT3E4VDZaRG5lSTVLQW1rWld4NlM4U1d3S242NGM3aHdXbThaWEtCOWg4SURJZWF1M2lmY0tWK3Y1Umg5aDhMaXdsTmZKT01zMHl5TU1GdUFMdUZ4NVB3TGhNaXdLTTcrRVo4VFJLYlVjZXZGbUVmY3BZVkFvNGtmSzhiRE0wWXBETCtZSjc5Z0tzUSt4RWlNaTZqa2lXdFpFTFhhZmlJNFdoY0kyaUVoR3k5SEtZMUttaXBuaGNoRzdPU3FETWtmRVBxTk5HWlIxU0xUeUtLWmgvQ1Q5VFJPTHdqNngvL2xVdGM5YVE2TExQQ1ptblNjelp6b0cybkVVMDNpWUljYWxvOVBuV2VuK1MySVQyUjRSL01zbDUvaC9WYU9PRURsTVh1b0FBQUFBU1VWT1JLNUNZSUk9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvY2lyY2xlXzEucG5nXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGd0FBQUJjQ0FZQUFBRGo3OUpZQUFBUWNVbEVRVlI0bk8zY2U1UVUxWjBIOE8vM3h3QkdrUUVVUldYY1FVQUJZUkF3Wm5lalJ3V2pZRnhValBHeHNrWU5pNGd1UGhCUXo0WXp5WWthVERhYmM0dzZHZ1ZVQkxNSzY3b0tvdmlJdXA0VDF6VXl3eHNFTXdReHlHTVFVV0M4My8yanEzdXFxMi8xZFBmMHpQQ1lldzVXOWIyM3Fybys5ZXRmM1hvNFBISFVMYUFSb0lGR2tKRjVzMkJLTUtnSENTYnJ3L1BCTkx5K3h0clQ2eTNvbjlnV2d2YUdlaVBJTHBIMkhUUVRtTkUzdEs2WWZVcjdicDUrNGZXa1BnZmJEdVpQZS9mM3lLZVU3SWZZUjVNMkJNYkJKUHZSckJmSW5qUTdGbVJwek1Hb0kva1p6VGFDM0VDekZTQS9vdkZEa3A4M0Z6Ykl2TEFCb01TNzh5MkwzWmxtSTBDZVQrUFpwUFdEa2RGdFpvMThzcFJtcFNCUGprUzJRRnRKNDFza1g0WFpheVIzNW8yZDNGNEVtNFdBdHhKMlI1aGRRdklxbW8wRTJURWRNeS9zYkdtRU5QWW4yUjltTjVMY0EzSVJ6ZWFSWEFEam5pWmhGd1NlTDdhbmJ4N1lKNUdjQ0xNZmtlem14eXdhdGkrTmRLVFp4U1F2aG5FYnlWbWdQVWpqK2tLd2FaWTN1TFVRZG44YTU1SmNEYlBiaTROdFRUMUJkZ1B0ZGhyWGtKd0hzbi9lMklWR2VETmlId2ZhREJxdkptbWVFMlFjZGgzSS82T3htclExU0VUZ0pwcHRCZmxGcUc4bm1oMlJtUEpZa3IxQTYwdmpJSkpEWVZhYXd3bXlIY2dyYUhZNXlHZElUb1Z4VXk3WUJlZHdzRURzK0p6ZW5zWTdRTHVIeGs3K0lWNGE5ajRhMzBBaXZ5NEJXVU9qaTQvczFEYTNwNjBySE9WbVJuSWd5QkUwRzBueVhCamJaOG5aUnZJYUdDOGgrWFBTZmdWeVgxYnNRc0NiQVhzWWpVK0FWaEUvbms3Vi81RzBwMmljQzNKcmJta2tKdVdrWTRPa0E3bVVaa3RKL2hyR28waGVCZHBZR3MvSWtyTTdrWFlmeUt0b3ZCN2tCM0hZaFVTNDVZUnRPV0VieWFrMHZ0Y0lkajFwczJFY1NOcDNhSHl3R2JCOWFXUnJjSUw4VGhENVQ5S3NQb0lkWGw4RnlQZElUZ05wWG13ckFEd25iRGFLM1pYa2l6VGVEMXI3R0xTOU5ENUMyc2t3L29pMFpkbFBrSllidG5td0xXdk9Cc2hsTkxzVzVNa2tINEZ4YjB6T2JnL3lQcHE5Q0xKckZMdkFDRzh5OXNrazM2Znh3b2FkeXNCK25jYkJwRTFJbkFBYkc0MkUybk1adVVTeG1SVTduQnJXd3ppQjVHRFNsa1N3dzMwdkpQbCtjSUJDNnkwRVBFOXNtb1g3ZnBma2V6VDJqc0hlSE9UQ0VhU3RqUHMxdFJKMk9JMnNCSGtlalZlQjNCeVRzM3VUZkEvRzd6WXBoK2VMM2ZCbDdYeVNpMm5zRm9QOUNzZ0tHdWZGamJQRFNLMklIVTRqODBoV2dId2xKbWQzSTdrWTVQbE5pUEFzbCtBeDJLZFBtelM4ODRrOUg2ZnhjRmdHZGozTnBvRWNSZU9XQXdnNzJYY0x6VWFCbkVZeTQ2UUs4bkNTTDRJYzNvUlJpZ2Vic2RpREFjenZlL25vbnAzS1R0aWMrdUtKWmJiVDdIeVF2NkJSMmJFdEorek1sSk9jYnhic1pGK1IvRVVReWR2RE9UdVlkaUE1SCtScGVZUG5pZDBId0tzQVN0bXVIZnBlTnJwSHB4T08zeHg4b1kwME94UGtHMW11SVAyUm1RVWJYbXlpR2JIRHVHOEVPWHRqUm5vaFMwa3VYam42eGo1NVIzaWoyRWFjUG0xU1Z3QUxBWFJQTHN4MmhqNWpMdXBSMnV2RUdwcWRCWEo1d2RqV0V0aVdEM1p5dlN0QW5rWHlZMDk3ZHhvWHJycjBwcTY1ZytlQ1BYV1NBWmdESU9Ob3NwMXQ3SFhSQmFOQmJtZ1NObHNDbS9saUp6OXZBRGtpTGRJYjJ2dVFuTFA2c3B0enVuVm9qV0dUQmdCVEFJenlMRjhINE1LbEQ4OWN6N2ljZk9Camg5RXZKRm5uYVI5RmNrck9FWjROZTlpVVc0WUNxUFFzdXcvQW1LVVB6NnlPUXJVY3RoV09iWmFKYmJIWXlXazFqR05JN3ZPMFY2NzU0YVRUR3dmUGp0MGV3RXdBSFR6TFRsbjY4TXpYV3hlYmhXTkhNYU9SNzVzbXR2VTZ5RHVqN1VpTVhKNVllK1Z0N2JPQ1o3dEhEZUJPQUJXZTVSWXNmWGptdnpjWjIxb0EyNHFLbmZ6OEc1RHpROWpKdGtGRTl0UmljZGpESnQ5OEFvQzdQTXRzQWpDdUtOaFJ4T2JBWnRHeGs5TnhJRGVsMVlFQWNmZTZxKzg0SVI0ODV1WVJnSHNCZFBJc003bTZhdmJXUXh3YklMZUJuQmpCQmhKWG92ZkdndnV3aDk1eFUzOEExM2o2TDZtdW1qMjNEVHMxLzU4Z1h3aGhKOXV2WGo5MlN1K1lDSTlFZGlKMy93UkFkRnk1QjhETmJkaVJPbkF5aUQyUmZpVWdwdnJCSTJQbm9iZE4rQnNBUC9EMG5Wbno2Sk1yVXllNlltSmI0ZGdzTm5ZalE4TUlObnJQKzdlMUlHZW05d05BWHJ2aDJtazlNMU5LQkFqQXJRQktJdjNxQWN4SUcxVVVFenMyVWh2SFJyR3hzN1JIc2NFRURza1pJT3REMkNEWUFlU3QzZ2hQYm1qSXJUY2VCbUNzSjdybjFQenVxZlZ0MkJIc1JJRGlwRG0vWEUveTZSQjJzQXpHZm5MOTNXbkJtL2JFQjhDbEFJNktZQXZBakZiRmpsd1Z0aXAyT0lvRDhFU1k0d0dRQ21HRDVERUFSNmFubE5ET0EvaWhKN3JmV2ZiRW5PV3RpaDNhMlZiSEJ0TGJnOUxyeVJuTENiNFR3a1ppSmoxanBNYmhwOTB5cmhQOE42aG1ocU1zdkdNOHhMSFRJanpSTmpPQ0RaS2ovenp1WHp0blJqaHdIb0NPRWV5OUFCYms5NXJiSVlRZDhRYXhnT1RlRURaQUhnYmdyTFFJRDFib2krNDNsOCtldDZQWTJNbGJ1ZEdVZE1CaFJ5SzhmT1o5T3dDK0djSk9ManU4QVR6WUNRQm5lOEJmYWc3c2pDaTNlTUJDc0ptQjB6ell6QWh4QUV5WUpiRkpna0FET0l5b3VQRzY3Z0JPOWtYNGdZanRoV3NPN0VpRUI4QnZockdEbVlyYThkT1BDaUxjQUdBUU1qTlNIWUNhVnNHMkltT2JOUSsySjhCQjFnQ29TNndqZFZBTXdMY1Q0SWwwMHMrejZJY3I1enpuV2dXYlJjWk9RaFVaTzlVM1ZFNTg3R2VPNUFjSVhZa0daVkJDUGhIaHAzakFQOHJFdGt4c3l4SGJtQ08ySFVEWXZoQUhBRlo3bWs0QmtpL2srL1AzbWt6c3VDak5BWnU1WW9lM2tUdDJCbUNxUDVvUE85WWJhenkxdllIa0tBWG82K213b1EwN083WXZwUVJsdmFldURBQktrTGpvaWQ0L0FZRE4yYkhUZi9iTmcyMForSEVuUC8vQjhTRVdFVHNlZkxPbjdtZ0FzQUhYWGxrQ29JdW53NVkyN0lLd0FlQnpUMTFwN2ZqcDdVc0FIQkd6VU4yQmdKMVlCenhwSnpPZEZCczdTMHFwaTZrL1BQcWdJYTBjMU5oaHRMUit5QU03YTVSN1NhUFBMZE5MRzNaMjdMeTlNeCtscFIrT0NIYmF3NHJXeHZhMlpTSjYwUk03MXpoMjVNQTBGUnVBRE1DWE1ZMmxiZGdGWTVmRzFPKzJOZi94UWoyQUhaN0dvOU94clEwNzk4ZysybE5YVjFaVnVTOTVhYi9WMCtHNGRPd3d5TUdPN2MvMWVhU1JIcDY2ejRHR20xZStTOUh5UXhjYjNpalBvL1R5MU5VbXdCTXJXKzNwMERjL2JHdkREdHRsbG84QkpGNVhCckRLMDZFaVArelFUaDdhMkVCd0t6WlNWZ0lORWI0eW8xa2FXbmJlMlJtdk15ZE9wQVZpVzY3WTFnTFk0VHhkUE96YThkTU53REJQVTNVQ1BKSERxNUY0NFNlSkRRR2xrQVptWXJOd2JPYUt6UmJBUnRHeGczSXFNb2VGRHNEN1FQQUFZc1BMcjIxQk1vOG5zQUVKRU01cHc4NjduT3VwcXk2cnF0d0tCQkVlUlBsYkVXd0ErbjdlMkhaSVl3UEE5ejExUzVJemx0eFpTQXNqMkpCMDluRi9kMGFYdkxCNTZHTFhqcC9lQmY3WFRkNUlnU2VIZmdLV1FOb1R3Z2FFanBBdWFUM3MrR2w2WGV0akIrVVNaTDY5dGdmQUgxTGdTWVNOYjd6OUJZUkZJZXdnbit2NjFzTkdidGpZTDdBQjREcFAzYUt5cXNxZEtmQTBQT2haaFZNS0JBaG5Iak9rWWtBYmR2WlNPMzc2QUlUZUlReVZaOE1mTEl3bmFRR0ViWkVvcDZRNzg4Vk8vVE1QY3ZUZWVxRnB4SWZObHNjT3lwMkpMNVJXdGdGWWtBNGV3dnYwdmYvOUd0Q1RhU2xGQXFCcmpqcjFsUEo4c0RQN0pOOFJ5WHpuSkJNWEtCZ2JMWTlkTzM1Nk9mei8xOS9zc3FyS3I5UEFHMkFTRUpKK0E2RStoQTBJSlJLbStyRXRSK3pNeUQ0WXNJTXlCWmtQYy9ZQytIVzBJMGMrKzI0S0lvbDB6SkNLdVpLdURMQ0Q5S0k5a2didlhQL0pxblJzNW9qTmd4VzdENEFhWkk1T0hpK3Jxdnh4dExObFhOU1lRZEpQQWJrUU5pUjFoUFRiTnV5TThvQUh1eDdBL2I3T0ZzVUdpYTAxSzFaQWVEcUVIVndRYWNTUlpTZGMyWWFkS2hjak1mYU9sbWZLcWlyWCtoYXdLSGJ5QzBxNkc5THVFRGFDbFA2ckk0NDd0bHNiTnJvQmVNaFR2eHZBUFhFTG1RK2JSdXhZdmU0dmtuNmVqaTFJT2g3UzczTEN0b01XR3dBZUJYQzhwLzdlc3FyS2pYRUxaZjRSMjlEUUQ5SURrS29WSGlJbXBwY2UxcTNycEVheFl5RVBlT3hKQUM3ejFGY0RtSkZ0UVl2RHBoRTdQNm5kSitFR1NIczkrZnlCRHAyUEhINElZZytQUWQwTDRJYXlxc3A5MlJaT25UVGpMbXAyL2VYVDl5Vk5qMkJEVW50STgwdSs5YTFCeGNVT28rNTMyQU1BeklmL1QxSk5MNnVxZkwreEZUU2NOR012YWdoSU15UXREQWJsNGRSU0N1bGxhMTlTWGp4czdLL1k1UUJlZ2Y4bG4wVklEQThiTFpaNmZoaURUUkpmZmI3VkFmcEhPSzJOcGhaSlBTRXRBVkYrc0dKWFB6S3JmT2NudFM4Q3lQaHpIQURXQXJpNnJLcnltMXpXWmJFampjakQzajNiNjdaTEdnVnBpd2Y5SkVodnUvcjYvZ2NoZG4vSi9XSER3dGNHZnZucDV1aUw5bHNBakNxcnF0eWU2L29zRit4a24zMWZmcmxXMHZtUTZtSWkvZDM2cjc0Kzl5RENQbGR5NzhxcFRQWGZZTzM4Lys2eGExTUt2UTdBQlhFWE9ISEYwckROZzIzaEEyTDRacy9lUDBrYUU5eGJTVWQzNmdwcDhkNHZkazNkVzdlVG1aRitZR0JYUHpxYjFZL01taXE1eGNFK1FjN0IxWCtEdGMrOTBHUFh4azBiQVl3QjhHRys2N1kwN0NoRzlBV2VvRjdmdU5jbGpRNWZpY3FsOEVzZzNTKzVsNy8rZkd2M0F4QzdPNXhla3R6OWNpcEpZa3NDRXVpN1Y4MWJjQU9BMXd0WnYrV0xuWXg0bWkyV2RBR2tiU0hzWU9vQXA1R1NsdTdlL05jckRpRHNLK0Qwa2VSR3BmWXBoQzFwdTV4R0RwczhjWEdoMnlqSkd6dlVyMTJIRHUvVWYvWDEzME42U1ZMdkVIWVN2NGVrZWJ0cU40MlROTEZ6cnhOWDdZL1lOWTg5ZFlya0hvVFRlWkpERFBZNk9ZMGVObm5pOHFac3l3ckZUazdiSDNINEtrbmZodlJ5QkR2NHNvS2tFWkpiV3JkdS9VUGJWNjhyMzErd2x6MytkSG5OWTA4OUpMbWxqV0F2bE5NWlRjVUd3c1BDTkZUTENUdVpLanFXZHQ0dXVYK0EwMTJTOWtXd0UxRXZkWkRUQkVocnRxMVlQV3RyellvQnVXR3o2TmpMbnBnellObmpUOCtTMHhySlRZQlRCeisyOWttNlMwNFhEWnM4Y1ZzeHRzMHhiNjd4WU1kRmZMWVJCd0FTdXpmL2RaaWttWEFhRk1KR1dwNVA3SkFrdlEybldaSmIwT09Nb1R2ODJDZ0s5b3JaODdwSXVsak9YUS9wTERteDRSZnB4YTZXM0hWRGI3L3BnMnpyTGF1cXpPdDc4TEszMWhZTk8vbDVWKzJtOXBJbVMrNXVTSjA4MktGZmdFczh2bk42UzlJaXlMMHFwK1U5enpuVE5RVjcxVFBQbVp3R1NQb2VuQnNwNld3NTF6RjU4TE5nNzRMVHZaTDc1ZERiYjhwNkk2b3c4TGZYRlJVN1BGKzNibjJabk82RmRMVWtpOEVPQUpSNHFwZlkrVG81OTRHa0dpUis5dXNoYlpMVFZzbDlBU2NwQWRRSlVpZEpuZVRjc1pCNnlha3Y1QWJLYVppazB0UTJYWGhiWG13bjZSazQzVFBrdGh2L25DdGd2dUFsellWTkVsMzZuRlFMY3V5MkZhdnZnM00va2ZRRFNlMGF3WWFjSzVVMEhOTHc5SDROSitVVVlBUXp1WjYwWDFOMjdHL2szSE9TZmpaazB2aGxlZWtWVUVxYUN6dDR1eElrY2RTcC9aYUR1SExMbjJwT2d0TXRrdnNuU04xaXNFTlhyczJLdlEzU0xEbjMyOVArNVo4L2JtN29GSGh6WTRNTlE3OWpobFI4RFBLMnovNzR3VFE1alpGMEJlUkd5cWxqN3RocUN2WWV5UzJTMCs4aFBULzQ1aC92YVNub0ZIaExZWWVIZmozKzl2UTlBT2VTbUx2eHJmL3BET2w3Y3U0Q1NXZEI2cGNkT3hPekVleVZrbnNiVHE5SWVyVml3dlU3czVNME0zaExZd2YvU2MzM1BPZk1uU1NlQi9rOEFHeFkrRnAzU0VQa05GaHkvZUJVTHFsTVRzZENybk1NOWs1Sm44RzVXa2tiNU54S1NCL0o2Y09CNDhadWFUVmRUeWxwVFd6Zk9MdDgxSGxiQUN3Ty9xV1ZOYy85VjRtY096S0MvVVcvYXk2dmIzNnE0cFQvQjQwSEZIQWxZc2J0QUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL2NpcmNsZV8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjBBQUFBY0NBWUFBQUNkejdTcUFBQUVTRWxFUVZSSWlaV1dYV2djVlJTQXY1bmRwa2wvVEF1RkZreWlRcUxVRjhFSHEyajZrTWFpUmJBRlVSTEJncHRvWWtuVmlscXRQcFM4cGJYVkNnb3Bpd2hDRTBraTI1QTBZaEtEYTM2RVJwRzJsSzRoVGRoc2s5WFFrTjJkeldabmQ4YUh1Wk9kYk81czZZR0Z2V2ZPT2Q4OVorNmNjeFhmdlBrTjBJeGMwc0NMd0xETGMvemwxUUQ0d3NFYTRBcFE1R0w2cmIrOCtoMEFGV2dCTHJzWUZnRWRRS1ViVkFBcmhaMGI4TExnQUtENDVrMkFMVmpaN0hOeHVnazhBeXhMbnBVQ1k4RGpMcjUvQURYKzh1cWtyVkQ5NWRXS3Y3eGFqMTY5L2hxbUdYRngzQXQwQXA0OHZVZm81VURUak56NWZiSmV2SUppWUJPZ2VGQXJQRUJ4cUxOUDNWbjE4UGlPcW9lT0tJcXlXUktpRXRnQkREaDBYd0t2UzNtR0VaL3BHNm43NWMyVFVhQkVBQTBnNjBHdHNIZGNkTHR2SkxIcmliMDNTaDhwZXdsRnljOEtyUEpIZ2F2QTIwQ3JTNFo2ZUhpaWFlaXRVemNFREt4RG1RSjBqeTh5eTEvbnZ6UEVManpUZ2NINWl1ZWZqVzdadmF0V0doQU9BaXZBV1RhV0c0REY2NkZUL2E4ZUh4VExqTENQQTZ1QXFRTDR3a0ZES0JKQUtuQ29vU3NSaWJhN1FJdUFNN2ljMUVRazJoNDQxUENUV0daRmRna1Izd0RyazBHQXMySkhDU0RWdGIvdWJPcnVjcThMV0pFcFUzZVhlN3YyMTUwVFM4TUJYQkViWUIzVUFVNENpV3hhVC9VZWJ2cFlUeVFuWE1EclJFOGtKM3BmYnZva205Wk5BYlFybDNRQ04wQ0ZySUZqdCtlMHNjL1B2MnZvK213aG9LSHJzMk9mblhzdk5qT25BeWJXb1pFQ3BWQmZPR2hpdmZ3a29FMTFEZnlyTFN3R0NrRzFoY1hBVlBmUFN3S29BNXJ3endoZFlhZ0RuQWEwdy8zK0o3ZVg3WEhyelFCc0w5dlRmUEQ3dG4wQ29vbGZXZ2FFWEJ1VWlwNUlQcnBwYThrRWlyS3pFQlRBTkl6bDZjRGdDeVBIVy8vR2NWTHZGMXFLMVRjZnV4ZlFBWjdTNXY5N3F2UHBWNVlLMlVuTGkvWFJkN2tCczJuOUg1bGVVZFhLYlEvdS90RVhEa3FieHIyZ1h3SFNqcFNPYThNOUI5NDRrbzVydjdyNDFnci8rNEkyQThka3h0blZkR2lrNWZSSHNaazVmYVRsOUlmWjFYVElKZTR4WHpqb2V2anlvVFZ1dXpReTJZWEp0b3VONGFIeE9FQjRhRHcyMlhheDBjaGtGMXhpWHhDM2lZTFFTcUNiM0ZSWUU5TXc0cUZMdlkzWDJqc1d5SDJMcTlmYU8rWkNuWDBOcG1IRUpiRzlRTGU0VlVpaHBVQS8xcnpNbCt5ZDBja1RvNTkrWVpmUzdsZ3hRQnM5ZWVibS9PaWZIeURwUENKZXZ5OGNMTTJIZWtTR1ZSSW5sbTVOdHc3VW4vZ3REeGpIYW5OeElIbWwvdjNocFZ2VDh0bHF4ZTF4bm1nVnVBQWNrRmtuSXRIMm50cWpseHhBZXdxdCtzTEJETG1tdnRKVGUvU0hBdU93QnZqYVhpaDRuN1AvZTdBdWFBOWdYUytjNzlzZ040ZzExcGZTQTJ3VmZzVXVmakVjemQvcnlMZ1kyQ1p4TkVWR0d2S3BZWmRjeFpxenhlVG1yUjNYdnBtc0FJWlhHR3dXd0JMV1gwSFdHcjhMVUFaV3NXNFZOdGdqNHRyZ2xKZmNZVUlBMG5ubFNRbW9QU3RsNGh4cHNMRmF0bmdBMVV0dXltY2tob2JJUWpvWEplQzA4TEd6bHNVeS9nY043TnlYaUdhZ2RBQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvcXVpdC5wbmdcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=