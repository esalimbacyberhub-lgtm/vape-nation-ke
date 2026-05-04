
ALTER TABLE public.products ADD COLUMN flavors text[] DEFAULT '{}';
ALTER TABLE public.products ALTER COLUMN flavor DROP NOT NULL;
ALTER TABLE public.products ALTER COLUMN flavor SET DEFAULT '';
ALTER TABLE public.products ALTER COLUMN puffs SET DEFAULT '';
