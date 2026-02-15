const contentData = {
            popular: [
                { title: "The Witcher", year: 2019, rating: 8.2, image: "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg" },
                { title: "Money Heist", year: 2017, rating: 8.3, image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
                { title: "Breaking Bad", year: 2008, rating: 9.5, image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
                { title: "The Queen's Gambit", year: 2020, rating: 8.6, image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg" },
                { title: "Dark", year: 2017, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg" },
                { title: "Peaky Blinders", year: 2013, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" },
                { title: "The Crown", year: 2016, rating: 8.6, image: "https://image.tmdb.org/t/p/w500/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg" }
            ],
            trending: [
                { title: "Squid Game", year: 2021, rating: 8.0, image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
                { title: "Loki", year: 2021, rating: 8.2, image: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" },
                { title: "The Mandalorian", year: 2019, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
                { title: "Bridgerton", year: 2020, rating: 7.4, image: "https://image.tmdb.org/t/p/w500/ke0cjv4v0PaO6mysC3aD4q5QNSx.jpg" },
                { title: "The Boys", year: 2019, rating: 8.4, image: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg" },
                { title: "Ozark", year: 2017, rating: 8.4, image: "https://image.tmdb.org/t/p/w500/pCGy6f8S3Yy9JqA8Yb3yMEgLzbm.jpg" },
                { title: "The Umbrella Academy", year: 2019, rating: 8.0, image: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" }
            ],
            continue: [
                { title: "Stranger Things", year: 2016, rating: 8.7, image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", progress: 65 },
                { title: "Black Mirror", year: 2011, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/7PRddZ2zqZWq5R3fkyU3xz5x9TC.jpg", progress: 30 },
                { title: "Narcos", year: 2015, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/7pZyJjElMw1W1oHaiTZowCRRwUf.jpg", progress: 80 },
                { title: "The Last of Us", year: 2023, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", progress: 45 },
                { title: "House of Cards", year: 2013, rating: 8.3, image: "https://image.tmdb.org/t/p/w500/hw2vi8agaJZ7oe6fPKkjQ13fYkL.jpg", progress: 20 },
                { title: "Better Call Saul", year: 2015, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg", progress: 75 }
            ],
            mylist: [
                { title: "Game of Thrones", year: 2011, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" },
                { title: "The Walking Dead", year: 2010, rating: 8.2, image: "https://image.tmdb.org/t/p/w500/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg" },
                { title: "Westworld", year: 2016, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/6aj09UTMQNyfSfk0ZX8rYOEsXL2.jpg" },
                { title: "The Big Bang Theory", year: 2007, rating: 8.2, image: "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg" },
                { title: "Friends", year: 1994, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg" },
                { title: "The Office", year: 2005, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg" }
            ]
        };

        // Function to create card elements
        function createCard(item, isLarge = false) {
            const card = document.createElement('div');
            card.className = `card ${isLarge ? 'large' : ''}`;
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            
            const overlay = document.createElement('div');
            overlay.className = 'card-overlay';
            
            const title = document.createElement('h3');
            title.className = 'card-title';
            title.textContent = item.title;
            
            const info = document.createElement('div');
            info.className = 'card-info';
            
            const year = document.createElement('span');
            year.textContent = item.year;
            
            const rating = document.createElement('span');
            rating.className = 'card-rating';
            rating.textContent = `${item.rating}/10`;
            
            info.appendChild(year);
            info.appendChild(rating);
            
            overlay.appendChild(title);
            overlay.appendChild(info);
            
            card.appendChild(img);
            card.appendChild(overlay);
            
            // Add progress bar for "Continue Watching" items
            if (item.progress) {
                const progressBar = document.createElement('div');
                progressBar.style.position = 'absolute';
                progressBar.style.bottom = '0';
                progressBar.style.left = '0';
                progressBar.style.right = '0';
                progressBar.style.height = '4px';
                progressBar.style.backgroundColor = 'var(--primary)';
                progressBar.style.width = `${item.progress}%`;
                card.appendChild(progressBar);
            }
            
            return card;
        }

        // Populate content rows
        document.addEventListener('DOMContentLoaded', function() {
            for (const [category, items] of Object.entries(contentData)) {
                const container = document.getElementById(category);
                items.forEach(item => {
                    container.appendChild(createCard(item, category === 'continue'));
                });
            }
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.getElementById('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Simulate loading more content when scrolling to bottom
            window.addEventListener('scroll', function() {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
                    // In a real app, you would fetch more content here
                    console.log("Load more content...");
                }
            });
        });