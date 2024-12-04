const s3 = new Proxy({"src":"/_astro/s3.BAFjFWYE.png","width":1920,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/services/s3.png";
							}
							
							return target[name];
						}
					});

export { s3 as default };
