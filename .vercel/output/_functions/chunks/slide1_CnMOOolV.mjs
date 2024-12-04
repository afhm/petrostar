const slide1 = new Proxy({"src":"/_astro/slide1.CJp-6OdC.jpg","width":1920,"height":982,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/slider/slide1.jpg";
							}
							
							return target[name];
						}
					});

export { slide1 as default };
