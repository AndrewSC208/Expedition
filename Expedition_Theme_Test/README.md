Project Expedition ROADMAP:
Client Folder:
	1. External Prototypes Build System:
		
			- Pages
				- arrangement of sections

				- Sections
					- arrangement of elements

					- Elements
						- Theme elements
							responsive images
								picture, srcset
							carosel
							cards
								icon-card
							buttons
							checkbox
							radio
							text input
							textarea
							Alert
							navbar
							sidemenu



	2. Internal CMS:
		- Angular 2 App
			- Electron - Desktop, offline mode
			- SPA/Progressive web app - Mobile Offline mode.

Server Folder:
	check local server gulp setup:
		- ts/bable (es6)
		- scss
		- JSHint
		- JSCS
		- wiredep
		- 


	1. Public folder
	2. View engine
	3. Api
	4. DB 

Expedition Project Spec: 
	1. Front-end: MVC style content site 
			EXTERNAL USER: 
			A. EXTERNAL USER: Content consumers (primary target audience) DYNAMIC WEBPAGES
			B. INTERNAL USER: Content Creator's running the site (using the cms, client) SOME CMS

	2. Back-end: MVC Styles backend for serving dynamic webpages, accepting data inputs from CMS, and storing information
		1. Public folder system for serving public assets:  
				- images
				- Dependencies for webpages
				- CMS app

		2. Incoming secure user's api for external/internal data:
				- Saving user input (EXTERNAL USER: blog comments) #soemhow track the external user
				- Secure api for saving data from content creators (INTERNAL USER: Page content)
		
		3. MongoDB
			- storage, of all things

		4. Serve all external dynamic pages (View Engin):
			IDEAS:
				Fast Framework slow to dev:
					- Angular Universal 2 (this once could get pretty complicated, and would be good for a very fine granind microservice architecrue) - the most fast, but slowest to dev
				
				Simple View engiin fast to dev:
				  - ejs
					- handelbars.js
