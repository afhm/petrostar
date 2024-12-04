const PetrostarColourLogo = new Proxy({"src":"/_astro/Petrostar-Colour-Logo.B869C_rm.png","width":976,"height":961,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/Petrostar-Colour-Logo.png";
							}
							
							return target[name];
						}
					});

export { PetrostarColourLogo as default };
