"""Validate the site's source data without rendering or publishing pages."""

import json
from pathlib import Path


def main():
    root = Path(__file__).resolve().parents[1]
    profile = json.loads((root / "_data/profile.json").read_text(encoding="utf-8"))
    publications = json.loads((root / "_data/publications.json").read_text(encoding="utf-8"))
    ids = [paper["id"] for paper in publications]
    if len(ids) != len(set(ids)):
        raise ValueError("Publication IDs must be unique.")
    required = {"id", "year", "type", "language", "title", "authors", "reference", "citation", "bibtex"}
    supported = {("English", "journal"), ("English", "conference"), ("Chinese", "journal")}
    for paper in publications:
        missing = required - paper.keys()
        if missing:
            raise ValueError(f"{paper['id']}: missing {sorted(missing)}")
        if (paper["language"], paper["type"]) not in supported:
            raise ValueError(f"{paper['id']}: unsupported bibliography category")
        if not isinstance(paper["year"], int) or paper["year"] < 0:
            raise ValueError(f"{paper['id']}: year must be a nonnegative integer")
        if paper.get("doi", "").startswith(("http:", "https:")):
            raise ValueError(f"{paper['id']}: DOI must omit the resolver prefix")
    selected = profile["selected_publications"]
    if len(selected) != len(set(selected)) or set(selected) - set(ids):
        raise ValueError("Selected publication IDs must be unique and present in the bibliography.")
    routes = {}
    for path in (root / "_pages").iterdir():
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        if not text.startswith("---\n"):
            continue
        for line in text.split("---", 2)[1].splitlines():
            if line.startswith("permalink:"):
                route = line.partition(":")[2].strip().strip("\"'")
                if route in routes:
                    raise ValueError(f"Duplicate route {route}: {routes[route]} and {path.name}")
                routes[route] = path.name
    print(f"Validated {len(publications)} publications, {len(selected)} selections, and {len(routes)} routes.")


if __name__ == "__main__":
    main()
