import React, { useEffect, useState } from "react";
import { Card, Image, Text, Badge, Group, Button, TextInput } from "@mantine/core";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query,setQuery] = useState("ai")

  

  const fetchNews = async () => {
    try {
      setLoading(true);
      const newsfromapi = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2026-07-20&sortBy=publishedAt&apiKey=615ca18cba26459bb1fb2c5f6bf73784`,
      );
      const finalresponse = await newsfromapi.json();
      setNews(finalresponse.articles);
    } catch (err) {
      console.error(err);
      alert("Error aayo");
    } finally {
      console.log("final ko statement")
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news, "newss");



  return (
    <div>
      {/* <Button onClick={fetchNews}>Fetch News </Button> */}

     <div className="w-1/4 px-20">
       <TextInput value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="search any news"/>
        <Button onClick={fetchNews}>Search</Button>
     </div>
      {loading ? (
        <div className="h-[90vh] flex justify-center items-center">
          <span className="inline-flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
            Loading News...
          </span>
        </div>
      ) : (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card
              key={item.url || index}
              shadow="sm"
              padding="lg"
              radius="lg"
              withBorder
              className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <Card.Section>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.urlToImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Source Badge */}
                  <Badge
                    className="absolute right-4 top-4"
                    color="blue"
                    variant="filled"
                  >
                    {item.source?.name || "News"}
                  </Badge>
                </div>
              </Card.Section>

              {/* Content */}
              <div className="flex flex-1 flex-col pt-5">
                {/* Date */}
                <Text size="sm" c="dimmed" className="mb-2">
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                </Text>

                {/* Title */}
                <Text
                  fw={700}
                  size="lg"
                  className="mb-3 line-clamp-2 leading-7"
                >
                  {item.title}
                </Text>

                {/* Description */}
                <Text
                  size="sm"
                  c="dimmed"
                  className="mb-5 line-clamp-3 leading-6"
                >
                  {item.description}
                </Text>

                {/* Bottom section */}
                <div className="mt-auto">
                  <Group
                    justify="space-between"
                    className="border-t border-gray-200 pt-4"
                  >
                    <div>
                      <Text size="xs" c="dimmed">
                        Author
                      </Text>

                      <Text size="sm" fw={600}>
                        {item.author || "Unknown"}
                      </Text>
                    </div>

                    <Button
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      radius="md"
                      variant="light"
                    >
                      Read →
                    </Button>
                  </Group>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
